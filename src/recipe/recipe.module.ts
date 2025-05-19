import { Module } from '@nestjs/common';
import { RecipeService } from './service/recipe.service';
import { RecipeController } from './controllers/recipe.controller';
import {PrismaService} from "../prisma.service";
import {IngredientService} from "../ingredient/ingredient.service";
import {IngredientItemVOService} from "./service/ingredient-item-vo.service";
import {RecipeRestController} from "./controllers/recipe.api.controller";
import {RecipeResolver} from "./recipe.resolver";
import {RecipeReviewService} from "../recipe-review/recipe-review.service";
import {IngredientModule} from "../ingredient/ingredient.module";
import {RecipeReviewModule} from "../recipe-review/recipe-review.module";
import {S3Service} from "../s3/s3.service";
import {AuthService} from "../authentification/auth.service";

@Module({
  imports: [IngredientModule, RecipeReviewModule],
  controllers: [RecipeController, RecipeRestController ],
  providers: [RecipeService, PrismaService, IngredientService, IngredientItemVOService, RecipeResolver, RecipeReviewService, S3Service, AuthService],
})
export class RecipeModule {}
