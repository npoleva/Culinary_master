import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './controllers/user.controller';
import {PrismaService} from "../prisma.service";
import {UserRestController} from "./controllers/user.api.controller";
import {UserResolver} from "./user.resolver";
import {RecipeService} from "../recipe/service/recipe.service";
import {ShoppingListService} from "../shopping-list/service/shopping-list.service";
import {RecipeReviewService} from "../recipe-review/recipe-review.service";
import {ShoppingListItemVOService} from "../shopping-list/service/shopping-list-item-vo-service";
import {IngredientItemVOService} from "../recipe/service/ingredient-item-vo.service";
import {RecipeResolver} from "../recipe/recipe.resolver";
import {RecipeModule} from "../recipe/recipe.module";
import {ShoppingListModule} from "../shopping-list/shopping-list.module";
import {IngredientModule} from "../ingredient/ingredient.module";
import {S3Service} from "../s3/s3.service";

@Module({
  imports: [RecipeModule, ShoppingListModule, IngredientModule],
  controllers: [UserController, UserRestController],
  providers: [UserService, PrismaService, UserResolver,
    RecipeService, RecipeReviewService, ShoppingListService,
    ShoppingListItemVOService, IngredientItemVOService, RecipeResolver, S3Service,
  ],
  exports: [UserService]
})
export class UserModule {}
