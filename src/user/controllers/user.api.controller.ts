import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Patch,
    ValidationPipe,
    Query,
    Res,
    Req, UseInterceptors, Header, UseGuards, ForbiddenException,
} from '@nestjs/common';
import { UserService } from '../user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { Request, Response as ExpressResponse } from 'express';
import {
    ApiTags,
    ApiOperation,
    ApiQuery,
    ApiResponse,
    ApiNotFoundResponse,
    ApiBody,
    ApiParam, ApiHeader, ApiBearerAuth,
} from '@nestjs/swagger';
import {PaginationInterceptor} from "../../interceptors/pagination-interceptor";
import {ETagInterceptor} from "../../interceptors/etag-interceptor";
import {PaginationQueryDto} from "../../pagination-query.dto";

@ApiTags('Пользователь')
@Controller('/api/user')
@ApiBearerAuth('jwt-auth')
@UseInterceptors(ETagInterceptor)
export class UserRestController {
    constructor(private readonly userService: UserService) {}

    @Post()
    @ApiOperation({ summary: 'Создание нового пользователя' })
    @ApiBody({ type: CreateUserDto })
    @ApiResponse({ status: 201, description: 'Пользователь успешно создан' })
    @ApiResponse({ status: 400, description: 'Ошибка валидации данных' })
    @Header('Cache-Control', 'no-store')
    create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
        try {
            const user = this.userService.create(createUserDto);
            return { message: 'Пользователь успешно создан' };
        } catch (error) {
            throw new ForbiddenException('Ошибка валидации данных\'');
        }
    }

    @Get()
    @ApiOperation({ summary: 'Получить всех пользователей с пагинацией' })
    @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
    @ApiQuery({ name: 'limit', required: false, type: Number, example: 5 })
    @ApiResponse({
        status: 200,
        description: 'Список пользователей с пагинацией',
        schema: {
            example: {
                users: [
                    { id: '1', name: 'Alice' },
                    { id: '2', name: 'Bob' }
                ],
                total: 100,
                totalPages: 20
            }
        }
    })
    @UseInterceptors(PaginationInterceptor)
    @Header('Cache-Control', 'public, max-age=3600')
    async findAll(
        @Query(new ValidationPipe({ transform: true })) query: PaginationQueryDto,
    ) {
        try {
            const users = await this.userService.findAll(query.page, query.limit);
            return { message: 'Список пользователей с пагинацией успешно получен.', data: users };  // Только при успешном запросе
        } catch (error) {
            throw new ForbiddenException('Ошибка при получении пользователей');
        }
    }


    @Get(':id')
    @ApiOperation({ summary: 'Получить пользователя по ID' })
    @ApiParam({ name: 'id', description: 'ID пользователя', type: String })
    @ApiResponse({ status: 200, description: 'Найденный пользователь', type: Object })
    @ApiNotFoundResponse({ description: 'Пользователь не найден' })
    @Header('Cache-Control', 'public, max-age=86400')
    @ApiHeader({
        name: 'Cache-Control',
        description: 'Время кэширования: public, max-age=86400 (24 часа)',
        example: 'public, max-age=86400'
    })
    @ApiHeader({
        name: 'ETag',
        description: 'Хеш содержимого для валидации кэша',
        example: '"b2c3d4e5f6g7"'
    })
    findOne(@Param('id') id: string) {
        try {
            const user =  this.userService.findOne(id);
            if (!user) {
                return { message: 'Пользователь с указанным ID не найден' };
            }
            return { message: 'Пользователь найден успешно.', data: user };
        } catch (error) {
            throw new ForbiddenException('Ошибка при получении пользователя');
        }
    }

    // @Patch(':id')
    // @ApiOperation({ summary: 'Обновить пользователя' })
    // @ApiParam({ name: 'id', description: 'ID пользователя', type: String })
    // @ApiBody({ type: UpdateUserDto })
    // @ApiResponse({ status: 200, description: 'Пользователь обновлён' })
    // @ApiNotFoundResponse({ description: 'Пользователь не найден' })
    // @Header('Cache-Control', 'no-store')
    // @Patch(':id')
    // async update(
    //     @Param('id') id: string,
    //     @Body() updateUserDto: UpdateUserDto,
    //     @Req() req: Request
    // ) {
    //     const session = req.session;
    //     if (!session) throw new ForbiddenException('Session required');
    //
    //     try {
    //         const updatedUser = await this.userService.update(id, updateUserDto);
    //         return { message: 'Пользователь успешно обновлён', data: updatedUser };
    //     } catch (error) {
    //         throw new ForbiddenException('Ошибка при обновлении пользователя');
    //     }
    // }


    @Delete(':id')
    @ApiOperation({ summary: 'Удалить пользователя' })
    @ApiParam({ name: 'id', description: 'ID пользователя', type: String })
    @ApiResponse({ status: 200, description: 'Пользователь удалён' })
    @ApiNotFoundResponse({ description: 'Пользователь не найден' })
    @Header('Cache-Control', 'no-store')
    remove(@Param('id') id: string) {
        try {
            this.userService.remove(id);
            return { message: 'Пользователь успешно удалён' };
        } catch (error) {
            throw new ForbiddenException('Пользователь не найден');
        }
    }
}
