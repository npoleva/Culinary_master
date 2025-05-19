import { Module } from '@nestjs/common';
import { ShoppingListService } from './service/shopping-list.service';
import { ShoppingListController } from './controllers/shopping-list.controller';
import {PrismaService} from "../prisma.service";
import {RecipeService} from "../recipe/service/recipe.service";
import {IngredientService} from "../ingredient/ingredient.service";
import {IngredientItemVOService} from "../recipe/service/ingredient-item-vo.service";
import {ShoppingListRestController} from "./controllers/shopping-list.api.controller";
import {ShoppingListItemVOService} from "./service/shopping-list-item-vo-service";
import {ShoppingListResolver} from "./shopping-list.resolver";
import {RecipeModule} from "../recipe/recipe.module";
import {IngredientModule} from "../ingredient/ingredient.module";
import {S3Service} from "../s3/s3.service";
import {AuthService} from "../authentification/auth.service";

@Module({
  imports: [RecipeModule, IngredientModule],
  controllers: [ShoppingListController, ShoppingListRestController],
  providers: [ShoppingListService, PrismaService, RecipeService, IngredientService, IngredientItemVOService, ShoppingListItemVOService, ShoppingListResolver, S3Service, AuthService],
  exports: [ShoppingListService, ShoppingListItemVOService]
})
export class ShoppingListModule {}
