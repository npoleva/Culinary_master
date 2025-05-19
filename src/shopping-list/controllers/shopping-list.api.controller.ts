import {Controller, Get, Post, Delete, Body, Param, Query, UseInterceptors, Header} from '@nestjs/common';
import { ShoppingListService } from '../service/shopping-list.service';
import {ApiOperation, ApiResponse, ApiQuery, ApiBody, ApiParam, ApiTags, ApiBearerAuth} from '@nestjs/swagger';
import {ETagInterceptor} from "../../interceptors/etag-interceptor";

@Controller('api/shopping-list')
@ApiTags('Список покупок')
@UseInterceptors(ETagInterceptor)
@ApiBearerAuth('jwt-auth')
export class ShoppingListRestController {
    constructor(private readonly shoppingListService: ShoppingListService) {}

    @Get()
    @ApiOperation({ summary: 'Получить список покупок пользователя' })
    @ApiQuery({
        name: 'userId',
        description: 'Идентификатор пользователя, чьи ингредиенты в списке покупок.',
        required: true,
        type: String,
    })
    @ApiResponse({
        status: 200,
        description: 'Возвращает список покупок пользователя.',
    })
    @ApiResponse({
        status: 404,
        description: 'Ошибка при получении списка покупок',
    })
    @Header('Cache-Control', 'public, max-age=3600')
    async getShoppingList(@Query('userId') userId: string) {
        try {
            const shoppingList = await this.shoppingListService.findOrCreateByUser(userId);
            if (!shoppingList) {
                return { message: 'Пользователь не найден.' };
            }
            return { message: 'Список покупок успешно получен.', data: shoppingList };
        } catch (error) {
            return { message: 'Ошибка при получении списка покупок' };
        }    }

    @Post('add-ingredients')
    @ApiOperation({ summary: 'Добавить ингредиенты в список покупок' })
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                userId: { type: 'string' },
                recipeIds: {
                    type: 'array',
                    items: { type: 'string' },
                },
            },
            required: ['userId', 'recipeIds'],
        },
    })
    @ApiResponse({
        status: 200,
        description: 'Ингредиенты успешно добавлены.',
    })
    @ApiResponse({
        status: 400,
        description: 'Некорректные данные для добавления ингредиентов.',
    })
    @Header('Cache-Control', 'public, max-age=3600')
    async addIngredients(
        @Body() body: { userId: string; recipeIds: string[] | string }
    ) {
        let { recipeIds } = body;
        const { userId } = body;

        if (!Array.isArray(recipeIds)) {
            recipeIds = [recipeIds];
        }

        try {
            await this.shoppingListService.addIngredientsFromRecipes(userId, recipeIds);
            return { message: 'Ингредиенты успешно добавлены' };
        } catch (error) {
            return { message: 'Некорректные данные для добавления ингредиентов.' };
        }
    }

    @Delete(':ingredientId')
    @ApiOperation({ summary: 'Удалить ингредиент из списка покупок' })
    @ApiParam({
        name: 'ingredientId',
        description: 'Идентификатор ингредиента, который нужно удалить.',
        required: true,
        type: String,
    })
    @Header('Cache-Control', 'public, max-age=3600')
    @ApiQuery({
        name: 'userId',
        description: 'Идентификатор пользователя, чей ингредиент удаляется.',
        required: true,
        type: String,
    })
    @ApiResponse({
        status: 200,
        description: 'Ингредиент успешно удалён.',
    })
    @ApiResponse({
        status: 404,
        description: 'Ингредиент или пользователь не найден.',
    })
    @Header('Cache-Control', 'public, max-age=3600')
    async removeIngredient(
        @Param('ingredientId') ingredientId: string,
        @Query('userId') userId: string
    ) {
        try {
            await this.shoppingListService.removeIngredientFromShoppingList(userId, ingredientId);
            return { message: 'Ингредиент успешно удалён' };
        } catch (error) {
            return { message: 'Ингредиент или пользователь не найден.' };
        }
    }
}
