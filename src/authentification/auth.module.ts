import { DynamicModule, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import supertokens from 'supertokens-node';
import Session from 'supertokens-node/recipe/session';
import EmailPassword from 'supertokens-node/recipe/emailpassword';
import {AuthController} from "./auth.controller";
import {PrismaService} from "../prisma.service";

interface SuperTokensConfig {
  connectionURI: string;
  apiKey?: string;
  appInfo: {
    appName: string;
    apiDomain: string;
    websiteDomain: string;
  };
}

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
})
export class AuthModule {
  static forRoot(config: SuperTokensConfig): DynamicModule {
    supertokens.init({
      framework: 'express',
      supertokens: {
        connectionURI:
          'https://st-dev-ae3f5260-2e67-11f0-8622-951f65f9b4b5.aws.supertokens.io',
        apiKey: 'BGglPSWItxXWESpKog0iQy4AQD',
      },
      appInfo: {
        ...config.appInfo,
        apiBasePath: '/user/login',
        websiteBasePath: '/',
      },
      recipeList: [EmailPassword.init(), Session.init()],
    });

    return {
      module: AuthModule,
      imports: [ConfigModule],
      providers: [AuthService],
      exports: [AuthService],
    };
  }
}
