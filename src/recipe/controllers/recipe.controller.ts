// import {
//   Controller,
//   Post,
//   Body,
//   Get,
//   Render,
//   Redirect,
//   Query,
//   Param,
//   Delete,
//   ValidationPipe,
//   UsePipes, UseInterceptors, UploadedFile, FileTypeValidator, ParseFilePipe, MaxFileSizeValidator
// } from '@nestjs/common';
// import { IngredientService } from '../../ingredient/ingredient.service';
// import {RecipeService} from "../service/recipe.service";
// import {IngredientItemVOService} from "../service/ingredient-item-vo.service";
// import {CreateRecipeDto} from "../dto/recipe-dto/create-recipe.dto";
// import {CreateIngredientItemVODto} from "../dto/ingredient-item-vo/create-ingredient-item-vo.dto";
// import {KitchenType} from "@prisma/client";
// import {UpdateRecipeDto} from "../dto/recipe-dto/update-recipe.dto";
// import {FileInterceptor} from "@nestjs/platform-express";
// import {S3Service} from "../../s3/s3.service";
// import {ApiExcludeController} from "@nestjs/swagger";
// import { Response } from 'express';
//
// @Controller('recipe')
// @ApiExcludeController()
// export class RecipeController {
//   constructor(
//       private readonly recipeService: RecipeService,
//       private readonly ingredientService: IngredientService,
//       private readonly ingredientItemVOService: IngredientItemVOService,
//       private readonly s3Service: S3Service,
//   ) {}
//
//   @Get('/list')
//   @Render('recipe/recipes')
//   async findAll() {
//     const { recipes, total, totalPages } = await this.recipeService.findAll();
//     return { recipes };
//   }
//
//   @Get('/add')
//   @Render('recipe/add-recipe')
//   async showCreateForm(@Query('authorId') authorId: string) {
//     const { ingredients: rawIngredients } = await this.ingredientService.findAll();
//     const ingredients = rawIngredients.map(ing => ({
//       id: ing.id,
//       name: ing.name
//     }));
//
//     const kitchenTypes = Object.values(KitchenType);
//     return { ingredients, authorId, kitchenTypes };
//   }
//
//   @Post('/create')
//   @Redirect()
//   @UseInterceptors(FileInterceptor('image'))
//   async create(
//       @Body() createRecipeDto: CreateRecipeDto,
//       @UploadedFile(
//           new ParseFilePipe({
//             validators: [
//               new MaxFileSizeValidator({ maxSize: 20 * 1024 * 1024 }),
//               new FileTypeValidator({ fileType: 'image/(jpeg|png)' }),
//             ],
//             fileIsRequired: false,
//           }),
//       )
//       file?: Express.Multer.File,
//   ) {
//
//     console.log('Create post method');
//
//     const transformedDto: CreateRecipeDto = {
//       name: createRecipeDto.name,
//       description: createRecipeDto.description,
//       kitchenType: createRecipeDto.kitchenType,
//       cookingTime: Number(createRecipeDto.cookingTime),
//       calories: Number(createRecipeDto.calories),
//       authorId: createRecipeDto.authorId,
//       ingredientsCount: createRecipeDto.ingredientItems.length,
//       ingredientItems: createRecipeDto.ingredientItems.map((item, index) => ({
//         ingredientId: item.ingredientId,
//         quantity: Number(item.quantity),
//         unit: item.unit,
//       })),
//     };
//
//     await this.recipeService.create(transformedDto, file);
//     return { url: `/recipe/list` };
//   }
//
//   @Get(':id')
//   @Render('recipe/recipe')
//   async findOne(@Param('id') id: string) {
//     const recipe = await this.recipeService.findOne(id);
//     return { recipe };
//   }
//
//   @Get(':id/edit')
//   @Render('recipe/edit-recipe')
//   async showEditForm(@Param('id') id: string) {
//     const recipe = await this.recipeService.findOne(id);
//     // const ingredients = await this.ingredientItemVOService.findAllByRecipeId(id);
//     const kitchenTypes = Object.values(KitchenType);
//
//     return { recipe, kitchenTypes } //, ingredients, kitchenTypes };
//   }
//
//   @Post(':id/update')
//   @Redirect()
//   @UseInterceptors(FileInterceptor('image'))
//   async update(
//       @Param('id') id: string,
//       @Body() updateDto: UpdateRecipeDto,
//       @UploadedFile(
//           new ParseFilePipe({
//             validators: [
//               new MaxFileSizeValidator({ maxSize: 20 * 1024 * 1024 }),
//               new FileTypeValidator({ fileType: 'image/(jpeg|png)' }),
//             ],
//             fileIsRequired: false,
//           }),
//       )
//           file?: Express.Multer.File,
//   ) {
//     await this.recipeService.update(
//         id,
//         {
//           name: updateDto.name,
//           description: updateDto.description,
//           kitchenType: updateDto.kitchenType,
//           cookingTime: updateDto.cookingTime,
//           calories: updateDto.calories,
//         },
//         file,
//     );
//
//     return { url: `/recipe/${id}` };
//   }
//
//   @Delete(':id')
//   @Redirect('list')
//   async remove(@Param('id') id: string) {
//     await this.recipeService.remove(id);
//   }
//
//   @Delete(':id/delete-ingredient')
//   async removeIngredient(@Param('id') id: string) {
//     console.log("PFPFPFKSDFJSIJGSOIJGSOIJGPOISDJGpoisjg")
//     await this.ingredientItemVOService.deleteById(id);
//   }
// }

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
    console.log("PFPFPFKSDFJSIJGSOIJGSOIJGPOISDJGpoisjg")
    await this.ingredientItemVOService.deleteById(id);
  }

}
