import {Controller, Get, Post, Body, Patch, Param, Delete, Render, Query, Res, Redirect} from '@nestjs/common';
import { ShoppingListService } from '../service/shopping-list.service';
import { CreateShoppingListDto } from '../dto/shopping-list/create-shopping-list.dto';
import { UpdateShoppingListDto } from '../dto/shopping-list/update-shopping-list.dto';
import {RecipeService} from "../../recipe/service/recipe.service";
import {IngredientService} from "../../ingredient/ingredient.service";
import {IngredientItemVOService} from "../../recipe/service/ingredient-item-vo.service";
import {CreateIngredientDto} from "../../ingredient/dto/ingredient/create-ingredient.dto";
import {CreateIngredientItemVODto} from "../../recipe/dto/ingredient-item-vo/create-ingredient-item-vo.dto";
import {CreateShoppingListItemVoDto} from "../dto/shopping-list-item-vo/create-shopping-list-item-vo.dto";
import {ApiExcludeController} from "@nestjs/swagger";

@Controller('shopping-list')
@ApiExcludeController()
export class ShoppingListController {
  constructor(private readonly shoppingListService: ShoppingListService,
              private readonly recipeService: RecipeService,) {}

  @Get('/add')
  @Render('shopping-list/update-shopping-list')
  async getCreateForm(@Query('userId') userId: string) {
    const recipes = await this.recipeService.findAll();
    console.log("UserId:", userId);
    return { userId, recipes };
  }

  @Get()
  @Render('shopping-list/shopping-list')
  async viewShoppingList(@Query('userId') userId: string) {
    const shoppingList = await this.shoppingListService.findOrCreateByUser(userId);
    return { shoppingList, userId };
  }

  @Post('add-ingredients')
  @Redirect()
  async addIngredients(
      @Body() body: { userId: string; recipeIds: string[] | string }
  ) {
    const { userId } = body;
    let { recipeIds } = body;

    if (!Array.isArray(recipeIds)) {
      recipeIds = [recipeIds];
    }

    if (!Array.isArray(recipeIds)) {
      recipeIds = [recipeIds];
    }
    await this.shoppingListService.addIngredientsFromRecipes(userId, recipeIds);

    return {
      url: `/shopping-list?userId=${userId}`,
    };
  }

  @Get('/remove-ingredient')
  @Render('shopping-list/remove-ingredient')
  async getRemoveIngredientPage(@Query('userId') userId: string) {
    const shoppingList = await this.shoppingListService.findOrCreateByUser(userId);
    console.log("UserId", userId);
    return { shoppingList, userId };
  }

  @Delete('/remove-ingredient/:ingredientId')
  @Redirect()
  async removeIngredient(
      @Param('ingredientId') ingredientId: string,
      @Query('userId') userId: string,
  ) {
    await this.shoppingListService.removeIngredientFromShoppingList(userId, ingredientId);
    return { url: `/shopping-list?userId=${userId}` };
  }

  @Post('/remove-ingredient/:ingredientId')
  @Redirect()
  async removeIngredientViaPost(
      @Param('ingredientId') ingredientId: string,
      @Query('userId') userId: string,
  ) {
    return this.removeIngredient(ingredientId, userId);
  }
}
