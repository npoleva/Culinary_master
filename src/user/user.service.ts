import {Injectable, Logger, NotFoundException} from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { PrismaService } from '../prisma.service';
import { User } from '@prisma/client';
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  private readonly CACHE_TTL = 30000;

  constructor(
      private readonly prisma: PrismaService,
      @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  async findAll(page: number = 1, limit: number = 10) {
    const cacheKey = this.getUsersCacheKey(page, limit);

    const cached = await this.cacheManager.get<{
      users: User[];
      total: number;
      totalPages: number;
    }>(cacheKey);

    if (cached) {
      this.logger.log(`Cache hit for ${cacheKey}`);
      return cached;
    }

    const skip = (page - 1) * limit;
    const [users, total] = await Promise.all([
      this.prisma.user.findMany({ skip, take: limit }),
      this.prisma.user.count(),
    ]);

    const totalPages = Math.ceil(total / limit);
    const result = { users, total, totalPages };

    await this.cacheManager.set(cacheKey, result, this.CACHE_TTL);
    return result;
  }

  async findOne(id: string) {
    const cacheKey = this.getUserCacheKey(id);

    const cached = await this.cacheManager.get(cacheKey);
    if (cached) {
      this.logger.log(`Cache hit for ${cacheKey}`);
      return cached;
    }

    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        recipes: true,
        ratings: true,
        shoppingLists: true,
      }
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    await this.cacheManager.set(cacheKey, user, this.CACHE_TTL);
    return user;
  }

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.prisma.user.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        // passwordHash: createUserDto.password,
        passwordHash: 'EXTERNAL_AUTH',
        roles: createUserDto.roles && createUserDto.roles.length > 0 ? createUserDto.roles : ['user'],
      },
    });
    await this.cacheManager.clear();
    return newUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: {
        ...updateUserDto,
        roles: updateUserDto.roles || undefined,
      },
    });

    await this.cacheManager.del(this.getUserCacheKey(id));
    await this.cacheManager.clear();
    return updatedUser;
  }

  async remove(id: string) {
    await this.prisma.user.delete({ where: { id } });
    await this.cacheManager.del(this.getUserCacheKey(id));
    await this.cacheManager.clear();
  }

  private getUserCacheKey(id: string): string {
    return `user_${id}`;
  }

  private getUsersCacheKey(page: number, limit: number): string {
    return `users_${page}_${limit}`;
  }

  async findOrCreateByEmail(email: string, name?: string) {
    let user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      user = await this.prisma.user.create({
        data: {
          email,
          name: name || email.split('@')[0],
          passwordHash: 'EXTERNAL_AUTH',
          roles: ['user']
        }
      });
    }
    return user;
  }
}