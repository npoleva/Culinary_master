import { Module } from '@nestjs/common';
import { RecipeReviewService } from './recipe-review.service';
import { RecipeReviewController } from './controllers/recipe-review.controller';
import {PrismaService} from "../prisma.service";
import {RecipeReviewRestController} from "./controllers/recipe-review.api.controller";
import {RecipeReviewResolver} from "./recipe-review.resolver";
import {UserService} from "../user/user.service";
import {RecipeService} from "../recipe/service/recipe.service";
import {S3Service} from "../s3/s3.service";

@Module({
  controllers: [RecipeReviewController, RecipeReviewRestController],
  providers: [RecipeReviewService, PrismaService, RecipeReviewResolver, UserService, RecipeService, S3Service],
})
export class RecipeReviewModule {}
