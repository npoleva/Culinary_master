import { Module } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { IngredientController } from './controllers/ingredient.controller';
import {PrismaService} from "../prisma.service";
import {IngredientRestController} from "./controllers/ingredient.api.controller";
import {IngredientResolver} from "./ingredient.resolver";
import {AuthService} from "../authentification/auth.service";
import {AuthGuard} from "../authentification/auth.guard";

@Module({
  controllers: [IngredientController, IngredientRestController],
  providers: [IngredientService, PrismaService, IngredientResolver, AuthService, AuthGuard],
})
export class IngredientModule {}
