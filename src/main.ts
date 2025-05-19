import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from "hbs";
import * as session from 'express-session';
import * as methodOverride from 'method-override';
import {ValidationPipe} from "@nestjs/common";
import {GlobalExceptionFilter} from "./filters/global-exception-filter";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {json, urlencoded} from "express";
import { middleware } from 'supertokens-node/framework/express';
import {RequestProcessingTimeInterceptor} from "./interceptors/request-processing-time-interceptor";
import { errorHandler } from 'supertokens-node/framework/express';
import supertokens from "supertokens-node";

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    const configService = app.get(ConfigService);
    const port = configService.get('port');

    app.use(middleware());

    app.enableCors({
        origin: 'http://localhost:1234',
        allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
        credentials: true,
    });

    app.use(json({ limit: '10mb' }));
    app.use(urlencoded({ extended: true, limit: '10mb' }));
    app.useGlobalFilters(new GlobalExceptionFilter());
    app.use(methodOverride('_method'));

    app.useGlobalInterceptors(new RequestProcessingTimeInterceptor());

    app.use((req, res, next) => {
        console.log(`Incoming: ${req.method} ${req.url} (original: ${req.originalMethod})`);
        next();
    });

    app.useGlobalPipes(new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        skipMissingProperties: false,
    }));

    // app.use((req, res, next) => {
    //     console.log('[GLOBAL] Before SuperTokens:', req.url);
    //     next();
    // });
    // app.use((req, res, next) => {
    //     console.log('[GLOBAL] After SuperTokens:', req.url);
    //     next();
    // });

    app.use(errorHandler());

    app.useStaticAssets(join(__dirname, '..', 'public'));
    console.log(join(__dirname, 'public'))

    console.log(join(__dirname,'..', 'public'))
    app.setBaseViewsDir(join(__dirname, '..', 'views'));
    hbs.registerPartials(join(__dirname, '..', 'views','partials'));
    app.setViewEngine('hbs');
    app.use(( req,res, next) => {
        res.locals.layout = 'layouts/main-layout';
        next();
    });

    const config = new DocumentBuilder()
        .setTitle('BoxSpace')
        .setVersion('1.0')
        .addBearerAuth(
            {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
            'access-token'
        )
        .build();

    // const config = new DocumentBuilder()
    //     .setTitle('BoxSpace')
    //     .setVersion('1.0')
    //     .addCookieAuth('sAccessToken', {
    //         type: 'apiKey',
    //         in: 'cookie',
    //         description: 'SuperTokens access token'
    //     })
    //     .addBearerAuth(
    //         {
    //             type: 'http',
    //             scheme: 'bearer',
    //             bearerFormat: 'JWT',
    //         },
    //         'access-token'
    //     )
    //     .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);

    await app.listen(port ?? 12345);
}
bootstrap()