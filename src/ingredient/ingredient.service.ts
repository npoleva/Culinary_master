import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import { CreateIngredientDto } from './dto/ingredient/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/ingredient/update-ingredient.dto';
import {PrismaService} from "../prisma.service";
import {UpdateUserDto} from "../user/dto/update-user.dto";
import {Ingredient, User} from "@prisma/client";

@Injectable()
export class IngredientService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createIngredientDto: CreateIngredientDto) {

    const { name, category, defaultUnit } = createIngredientDto;

    return this.prisma.ingredient.create({
      data: {
        name,
        category,
        defaultUnit,
      },
    });
  }

  async findAll(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const [ingredients, total] = await Promise.all([
      this.prisma.ingredient.findMany({
        skip,
        take: limit,
      }),
      this.prisma.ingredient.count(),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      ingredients,
      total,
      totalPages,
    };
  }

  async findOne(id: string) {
    const ingredient = this.prisma.ingredient.findUnique({
      where: { id },
    });

    if (!ingredient) {
      throw new NotFoundException(`Ингредиент с id ${id} не найден`);
    }

    return ingredient;
  }

   async update(id: string, updateIngredientDto: UpdateIngredientDto): Promise<Ingredient> {
    return this.prisma.ingredient.update({
      where: { id },
      data: updateIngredientDto,
    });
  }

  async remove(id: string): Promise<Ingredient> {
    return this.prisma.ingredient.delete({
      where: { id },
    });
  }
}
