import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Delete,
    Query,
    BadRequestException,
    Res,
    Req, Patch, UseInterceptors, UploadedFile, Header, ValidationPipe, UseGuards, SetMetadata,
} from '@nestjs/common';
import { RecipeService } from '../service/recipe.service';
import { IngredientItemVOService } from '../service/ingredient-item-vo.service';
import { Request, Response as ExpressResponse } from 'express';
import {
    ApiTags,
    ApiOperation,
    ApiQuery,
    ApiParam,
    ApiBody,
    ApiResponse, ApiConsumes, ApiBearerAuth,
} from '@nestjs/swagger';
import {FileInterceptor} from "@nestjs/platform-express";
import {ETagInterceptor} from "../../interceptors/etag-interceptor";
import {PaginationInterceptor} from "../../interceptors/pagination-interceptor";
import {PaginationQueryDto} from "../../pagination-query.dto";
import {AuthGuard} from "../../authentification/auth.guard";
import {Public, Roles} from "../../authentification/public.decorator";

@ApiTags('Рецепты')
@Controller('api/recipe')
@UseGuards(AuthGuard)
// @Roles('user')
@Public()
@UseInterceptors(ETagInterceptor, PaginationInterceptor)
@ApiBearerAuth()
export class RecipeRestController {
    constructor(
        private readonly recipeService: RecipeService,
        private readonly ingredientItemVOService: IngredientItemVOService,
    ) {}

    @Get('/list')
    @ApiOperation({ summary: 'Получить список рецептов с пагинацией' })
    @ApiQuery({ name: 'page', required: false, example: '1' })
    @ApiQuery({ name: 'limit', required: false, example: '10' })
    @ApiResponse({ status: 200, description: 'Успешный ответ с пагинированными рецептами' })
    @Header('Cache-Control', 'public, max-age=60')
    async findAll(
        @Query(new ValidationPipe({transform: true})) query: PaginationQueryDto,
        @Res() res: ExpressResponse,
        @Req() req: Request,
    ) {
        const { recipes, total, totalPages } = await this.recipeService.findAll(query.page, query.limit);

        return res.json({
            data: recipes,
            total,
            totalPages,
            currentPage: query.page,
        });
    }

    @Post('/create')
    @ApiOperation({ summary: 'Создать новый рецепт' })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                description: { type: 'string' },
                kitchenType: { type: 'string' },
                cookingTime: { type: 'string' },
                calories: { type: 'string' },
                authorId: { type: 'string' },
                ingredientIds: { type: 'array', items: { type: 'string' } },
                quantities: { type: 'array', items: { type: 'string' } },
                units: { type: 'array', items: { type: 'string' } },
                image: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    @ApiResponse({ status: 201, description: 'Рецепт успешно создан' })
    @UseInterceptors(FileInterceptor('image'))
    async create(
        @Body() body: any,
        @UploadedFile() file?: Express.Multer.File,
    ) {
        const {
            name,
            description,
            kitchenType,
            cookingTime,
            calories,
            authorId,
            ingredientIds,
            quantities,
            units,
        } = body;

        const ingredientItems = ingredientIds.map((ingredientId: string, index: number) => ({
            ingredientId,
            quantity: parseFloat(quantities[index]),
            unit: units[index],
        }));

        try {
            const recipe = await this.recipeService.create({
                name,
                description,
                kitchenType,
                cookingTime: parseInt(cookingTime),
                calories: parseInt(calories),
                authorId,
                ingredientItems,
                ingredientsCount: ingredientItems.length,
            }, file);

            return { message: 'Рецепт успешно создан', recipe };
        } catch (error) {
            throw new BadRequestException('Ошибка при создании рецепта: ' + error.message);
        }
    }

    @Get(':id')
    @ApiOperation({ summary: 'Получить рецепт по ID' })
    @ApiParam({ name: 'id', description: 'ID рецепта' })
    @ApiResponse({ status: 200, description: 'Рецепт найден' })
    @ApiResponse({ status: 400, description: 'Рецепт не найден' })
    @Header('Cache-Control', 'public, max-age=300')
    async findOne(@Param('id') id: string) {
        const recipe = await this.recipeService.findOne(id);
        if (!recipe) {
            throw new BadRequestException(`Рецепт с id ${id} не найден`);
        }
        return recipe;
    }

    @Patch(':id/update')
    @ApiOperation({ summary: 'Обновить рецепт по ID' })
    @ApiConsumes('multipart/form-data')
    @ApiParam({ name: 'id', description: 'ID рецепта' })
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                description: { type: 'string' },
                kitchenType: { type: 'string' },
                cookingTime: { type: 'string' },
                calories: { type: 'string' },
                image: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    @ApiResponse({ status: 200, description: 'Рецепт обновлён' })
    @UseInterceptors(FileInterceptor('image'))
    async update(
        @Param('id') id: string,
        @Body() body: any,
        @UploadedFile() file?: Express.Multer.File,
    ) {
        const { name, description, kitchenType, cookingTime, calories } = body;

        console.log("Update part of recipe", body);

        try {
            const updatedRecipe = await this.recipeService.update(id, {
                name,
                description,
                kitchenType,
                cookingTime: parseInt(cookingTime),
                calories: parseInt(calories),
            }, file);

            return { message: 'Рецепт обновлён', updatedRecipe };
        } catch (error) {
            throw new BadRequestException('Ошибка при обновлении рецепта: ' + error.message);
        }
    }


    @Delete(':id')
    @ApiOperation({ summary: 'Удалить рецепт по ID' })
    @ApiParam({ name: 'id', description: 'ID рецепта' })
    @ApiResponse({ status: 200, description: 'Рецепт удалён' })
    async remove(@Param('id') id: string) {
        await this.recipeService.remove(id);
        return { message: `Рецепт с id ${id} удалён` };
    }

    @Delete(':id/delete-ingredient')
    @ApiOperation({ summary: 'Удалить ингредиент из рецепта по ID' })
    @ApiParam({ name: 'id', description: 'ID ингредиента' })
    @ApiResponse({ status: 200, description: 'Ингредиент удалён' })
    async removeIngredient(@Param('id') id: string) {
        await this.ingredientItemVOService.deleteById(id);
        return { message: `Ингредиент с id ${id} удалён` };
    }
}