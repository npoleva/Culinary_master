import {MiddlewareConsumer, Module, RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configurations from './configurations'
import {PrismaService} from "./prisma.service";
import { UserModule } from './user/user.module';
import { RecipeModule } from './recipe/recipe.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { IngredientModule } from './ingredient/ingredient.module';
import {RecipeService} from "./recipe/service/recipe.service";
import {UserController} from "./user/controllers/user.controller";
import {UserService} from "./user/user.service";
import { RecipeReviewModule } from './recipe-review/recipe-review.module';
import {RecipeController} from "./recipe/controllers/recipe.controller";
import {IngredientService} from "./ingredient/ingredient.service";
import {IngredientItemVOService} from "./recipe/service/ingredient-item-vo.service";
import {RecipeReviewService} from "./recipe-review/recipe-review.service";
import {ShoppingListService} from "./shopping-list/service/shopping-list.service";
import {ShoppingListItemVOService} from "./shopping-list/service/shopping-list-item-vo-service";
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import {ComplexityPlugin} from "./graphql/plugins/plugins";
import { CacheModule } from '@nestjs/cache-manager';
import {S3Service} from "./s3/s3.service";
import {AuthMiddleware} from "./authentification/auth.middleware";
import {AuthModule} from "./authentification/auth.module";

@Module({
  imports: [
      ConfigModule.forRoot({
    isGlobal: true,
    load: [configurations],
  }),
      CacheModule.register({
          ttl: 10 * 1000,
          max: 100,
          isGlobal: true,
      }),
      UserModule,
      RecipeModule,
      ShoppingListModule,
      IngredientModule,
      RecipeReviewModule,
      RecipeReviewModule,
      GraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          autoSchemaFile: join(process.cwd(), 'src/schema/schema.gql'),
          sortSchema: true,
          playground: true,
          debug: true,
          introspection: true,
          context: ({ req, res }) => ({ req, res }),
      }),
      AuthModule.forRoot({
          connectionURI: process.env.CONNECTION_URI!,
          apiKey: process.env.API_KEY,
          appInfo: {
              appName: 'My App 1',
              apiDomain: 'http://localhost:1234',
              websiteDomain: 'http://localhost:1234',
          },
      }),
  ],
  controllers: [AppController, UserController, RecipeController],
  providers: [AppService,
      PrismaService,
      RecipeService,
      UserService,
      IngredientService,
      IngredientItemVOService,
      RecipeReviewService,
      ShoppingListService,
      ShoppingListItemVOService,
      ComplexityPlugin,
      ShoppingListItemVOService,
      S3Service,
  ],
  exports: [AppService, PrismaService],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthMiddleware)
            .exclude(
                { path: 'api/docs', method: RequestMethod.ALL },
                { path: 'api/docs-json', method: RequestMethod.ALL },
            )
            .forRoutes(
            'api/*');
    }
}