import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    NotFoundException,
    Query,
    BadRequestException,
    UseInterceptors, Header, ValidationPipe
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery, ApiParam, ApiResponse, ApiBadRequestResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { RecipeReviewService } from '../recipe-review.service';
import { CreateRecipeReviewDto } from '../dto/create-recipe-review.dto';
import { UpdateRecipeReviewDto } from '../dto/update-recipe-review.dto';
import {ETagInterceptor} from "../../interceptors/etag-interceptor";
import {PaginationQueryDto} from "../../pagination-query.dto";

@ApiTags('Отзывы на рецепты')
@Controller('api/recipe-review')
@UseInterceptors(ETagInterceptor)
export class RecipeReviewRestController {
    // constructor(private readonly recipeReviewService: RecipeReviewService) {}
    //
    // @Post()
    // @ApiOperation({ summary: 'Создать отзыв к рецепту' })
    // @ApiResponse({ status: 201, description: 'Отзыв успешно создан' })
    // @Header('Cache-Control', 'public, max-age=3600')
    // async create(@Body() createRecipeReviewDto: CreateRecipeReviewDto) {
    //     return this.recipeReviewService.create(createRecipeReviewDto)
    //         .then(review => ({ message: 'Отзыв успешно создан', review }));
    // }
    //
    // @Get()
    // @ApiOperation({ summary: 'Получить список отзывов по id рецепта с пагинацией' })
    // @ApiQuery({ name: 'recipeId', required: true, description: 'ID рецепта' })
    // @ApiQuery({ name: 'page', required: false, description: 'Номер страницы', example: 1 })
    // @ApiQuery({ name: 'limit', required: false, description: 'Количество элементов на странице', example: 10 })
    // @ApiBadRequestResponse({ description: 'Параметр recipeId обязателен' })
    // @Header('Cache-Control', 'public, max-age=3600')
    // async findAll(
    //     @Query('recipeId') recipeId: string,
    //     @Query(new ValidationPipe({ transform: true })) query: PaginationQueryDto,
    // ) {
    //     if (!recipeId) {
    //         throw new BadRequestException('Параметр recipeId обязателен');
    //     }
    //
    //     return this.recipeReviewService.findAll(
    //         recipeId,
    //         query.page,
    //         query.limit,
    //     );
    // }
    //
    // @Get(':id')
    // @ApiOperation({ summary: 'Получить один отзыв по ID' })
    // @ApiParam({ name: 'id', description: 'ID отзыва' })
    // @ApiNotFoundResponse({ description: 'Отзыв не найден' })
    // @Header('Cache-Control', 'public, max-age=3600')
    // async findOne(@Param('id') id: string) {
    //     const review = await this.recipeReviewService.findOne(id);
    //     if (!review) {
    //         throw new NotFoundException(`Отзыв с id ${id} не найден`);
    //     }
    //     return review;
    // }
    //
    // @Patch(':id')
    // @ApiOperation({ summary: 'Обновить отзыв по ID' })
    // @ApiParam({ name: 'id', description: 'ID отзыва' })
    // @Header('Cache-Control', 'public, max-age=3600')
    // async update(@Param('id') id: string, @Body() updateRecipeReviewDto: UpdateRecipeReviewDto) {
    //     const updated = await this.recipeReviewService.update(id, updateRecipeReviewDto);
    //     return { message: 'Отзыв обновлён', updated };
    // }
    //
    // @Delete(':id')
    // @ApiOperation({ summary: 'Удалить отзыв по ID' })
    // @ApiParam({ name: 'id', description: 'ID отзыва' })
    // @ApiNotFoundResponse({ description: 'Отзыв не найден' })
    // @Header('Cache-Control', 'public, max-age=3600')
    // async remove(@Param('id') id: string) {
    //     const review = await this.recipeReviewService.findOne(id);
    //     if (!review) {
    //         throw new NotFoundException(`Отзыв с id ${id} не найден`);
    //     }
    //     await this.recipeReviewService.remove(id);
    //     return { message: 'Отзыв удалён', recipeId: review.recipeId };
    // }
}
