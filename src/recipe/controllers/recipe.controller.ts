import {
  Controller,
  Post,
  Body,
  Get,
  Render,
  Redirect,
  Query,
  Res,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
  NotFoundException
} from '@nestjs/common';
import { IngredientService } from '../../ingredient/ingredient.service';
import {RecipeService} from "../service/recipe.service";
import {IngredientItemVOService} from "../service/ingredient-item-vo.service";
import {CreateRecipeDto} from "../dto/recipe-dto/create-recipe.dto";
import {CreateIngredientItemVODto} from "../dto/ingredient-item-vo/create-ingredient-item-vo.dto";
import {KitchenType} from "@prisma/client";
import {UpdateRecipeDto} from "../dto/recipe-dto/update-recipe.dto";
import {ApiExcludeController} from "@nestjs/swagger";
import {FileInterceptor} from "@nestjs/platform-express";
import {S3Service} from "../../s3/s3.service";

@Controller('recipe')
@ApiExcludeController()
export class RecipeController {
  constructor(
      private readonly recipeService: RecipeService,
      private readonly ingredientService: IngredientService,
      private readonly ingredientItemVOService: IngredientItemVOService,
      private readonly s3Service: S3Service
  ) {}

  @Get('/list')
  @Render('recipe/recipes')
  async findAll() {
    const { recipes, total, totalPages } = await this.recipeService.findAll();
    return { recipes };
  }

  @Get('/add')
  @Render('recipe/add-recipe')
  async showCreateForm(@Query('authorId') authorId: string) {
    const { ingredients: rawIngredients } = await this.ingredientService.findAll();
    const ingredients = rawIngredients.map(ing => ({
      id: ing.id,
      name: ing.name
    }));

    const kitchenTypes = Object.values(KitchenType);
    return { ingredients, authorId, kitchenTypes };
  }

  @Post('/create')
  @Redirect('/recipe/list')
  @UseInterceptors(FileInterceptor('image'))
  async create(
      @Body() body: any,
      @UploadedFile(
          new ParseFilePipe({
            validators: [
              new MaxFileSizeValidator({ maxSize: 20 * 1024 * 1024 }), // 20MB
              new FileTypeValidator({ fileType: 'image/(jpeg|png)' }),
            ],
            fileIsRequired: false,
          }),
      )
          file?: Express.Multer.File,
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
      units
    } = body;

    const ingredientItems = Array.isArray(ingredientIds)
        ? ingredientIds.map((ingredientId, index) => ({
          ingredientId,
          quantity: parseFloat(quantities[index]),
          unit: units[index],
        }))
        : [{
          ingredientId: ingredientIds,
          quantity: parseFloat(quantities),
          unit: units,
        }];

    await this.recipeService.create({
      name,
      description,
      kitchenType,
      cookingTime: parseInt(cookingTime),
      calories: parseInt(calories),
      authorId,
      ingredientsCount: ingredientItems.length,
      ingredientItems,
    }, file);
  }

  @Get('sort')
  @Render('recipe/recipes')
  async findAllSorted(
      @Query('field') field: string,
      @Query('order') order: string
  ) {
    const validFields = ['time', 'calories', 'ingredientsCount'];
    const validOrders = ['asc', 'desc'];

    if (!validFields.includes(field) || !validOrders.includes(order)) {
      throw new BadRequestException('Неверные параметры сортировки');
    }

    const isAscended = order === 'asc';

    let result;

    switch (field) {
      case 'time':
        result = await this.recipeService.findAllSortedByTime(1, 10, isAscended);
        break;
      case 'calories':
        result = await this.recipeService.findAllSortedByCalories(1, 10, isAscended);
        break;
      case 'ingredientsCount':
        result = await this.recipeService.findAllSortedByIngredientsCount(1, 10, isAscended);
        break;
    }

    const { recipes, total, totalPages } = result;
    return { recipes };
  }

  @Get(':id')
  @Render('recipe/recipe')
  async findOne(@Param('id') id: string) {
    const recipe = await this.recipeService.findOne(id);
    return { recipe };
  }

  @Get(':id/edit')
  @Render('recipe/edit-recipe')
  async showEditForm(@Param('id') id: string) {
    const recipe = await this.recipeService.findOne(id);
    // const ingredients = await this.ingredientItemVOService.findAllByRecipeId(id);
    const kitchenTypes = Object.values(KitchenType);

    return { recipe, kitchenTypes } //, ingredients, kitchenTypes };
  }

  @Post(':id/update')
  @Redirect()
  @UseInterceptors(FileInterceptor('image'))
  async update(
      @Param('id') id: string,
      @Body() body: any,
      @UploadedFile(
          new ParseFilePipe({
            validators: [
              new MaxFileSizeValidator({ maxSize: 20 * 1024 * 1024 }),
              new FileTypeValidator({ fileType: 'image/(jpeg|png)' }),
            ],
            fileIsRequired: false,
          }),
      )
          file?: Express.Multer.File,
  ) {
    const { name, description, kitchenType, cookingTime, calories } = body;

    await this.recipeService.update(id, {
      name,
      description,
      kitchenType,
      cookingTime: parseInt(cookingTime),
      calories: parseInt(calories),
    }, file);

    return { url: `/recipe/${id}` };
  }

  @Delete(':id')
  @Redirect('list')
  async remove(@Param('id') id: string) {
    await this.recipeService.remove(id);
  }

  @Delete(':id/delete-ingredient')
  async removeIngredient(@Param('id') id: string) {
    await this.ingredientItemVOService.deleteById(id);
  }
}
