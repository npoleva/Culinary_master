import {Controller, Get, Post, Body, Patch, Param, Delete, Render, Redirect, Query, Res} from '@nestjs/common';
import { RecipeReviewService } from '../recipe-review.service';
import { CreateRecipeReviewDto } from '../dto/create-recipe-review.dto';
import { UpdateRecipeReviewDto } from '../dto/update-recipe-review.dto';
import {ApiExcludeController} from "@nestjs/swagger";

@Controller('recipe-review')
@ApiExcludeController()
export class RecipeReviewController {
  constructor(private readonly recipeReviewService: RecipeReviewService) {}

  @Get('/add')
  @Render('recipe-review/create-recipe-review')
  async renderCreateForm(
      @Query('recipeId') recipeId: string,
      @Query('userId') userId: string,
  ) {
    return { recipeId, userId };
  }

  @Post('/create')
  @Redirect()
  async create(@Body() body: any) {
    const dto: CreateRecipeReviewDto = {
      userId: body.userId,
      recipeId: body.recipeId,
      rating: parseInt(body.rating),
      comment: body.comment,
    };

    await this.recipeReviewService.create(dto);
    return { url: `/recipe/${dto.recipeId}` };
  }

  @Get('/list')
  @Render('recipe-review/recipe-reviews')
  async findAll(@Query('recipeId') recipeId: string) {
    const { reviews, total, totalPages } = await this.recipeReviewService.findAll(recipeId);
    return { reviews };
  }

  @Get(':id')
  @Render('recipe-review/recipe-review')
  async findOne(@Param('id') id: string) {
    const review = await this.recipeReviewService.findOne(id);
    return { review }
  }

  @Get(':id/edit')
  @Render('recipe-review/edit-recipe-review')
  async editForm(@Param('id') id: string) {
    const review = await this.recipeReviewService.findOne(id);
    return { review };
  }

  @Post(':id/update')
  @Redirect()
  async update(
      @Param('id') id: string,
      @Body() updateRecipeReviewDto: UpdateRecipeReviewDto,
  ) {
    if (updateRecipeReviewDto.rating) {
      updateRecipeReviewDto.rating = parseFloat(updateRecipeReviewDto.rating.toString());
    }

    await this.recipeReviewService.update(id, updateRecipeReviewDto);
    return { url: `/recipe-review/${id}` };
  }


  @Delete(':id')
  @Redirect()
  async remove(@Param('id') id: string) {
    const review = await this.recipeReviewService.findOne(id);
    await this.recipeReviewService.remove(id);
    return { url: `/recipe/${review?.recipeId}` };
  }
}
