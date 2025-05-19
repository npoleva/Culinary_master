import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import supertokens from 'supertokens-node';
import Session from 'supertokens-node/recipe/session';
import EmailPassword from 'supertokens-node/recipe/emailpassword';

@Injectable()
export class AuthService implements OnModuleInit {
  constructor(private config: ConfigService) {}

  onModuleInit(): void {
    supertokens.init({
      framework: 'express',
      supertokens: {
        connectionURI: this.config.get<string>('CONNECTION_URI')!,
        apiKey: this.config.get<string>('API_KEY')!,
      },
      appInfo: {
        appName: 'My App 1',
        apiDomain: 'http://localhost:1234',
        websiteDomain: 'http://localhost:1234',
        apiBasePath: '/auth',
        websiteBasePath: '/',
      },
      // recipeList: [EmailPassword.init(), Session.init({
      //   cookieSameSite: 'none', // Для разработки на localhost
      //   cookieSecure: false,   // Разрешить HTTP (не только HTTPS)
      //   cookieDomain: 'localhost',
      //   exposeAccessTokenToFrontendInCookieBasedAuth: true,
      //   errorHandlers: {
      //     onUnauthorised: async (message, request, response) => {
      //       response.setStatusCode(401);
      //     }
      //   }
      // })],
    //   recipeList: [EmailPassword.init(), Session.init({
    //     // Управление передачей токенов
    //     getTokenTransferMethod: () => 'cookie', // "cookie" или "header"
    //
    //     // Атрибуты кук
    //     cookieSameSite: "strict", // Для кросс-сайтовых запросов
    //     cookieSecure: false,    // false для HTTP в development
    //     cookieDomain: "localhost",
    //
    //     // Дополнительные настройки
    //     antiCsrf: "VIA_TOKEN",  // [Документация, раздел "Anti-CSRF"]
    //     exposeAccessTokenToFrontendInCookieBasedAuth: true,
    //   })]
    // });
      recipeList: [EmailPassword.init(), Session.init({
        getTokenTransferMethod: () => 'header',
          }

      )]
  });
}
}