import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
    ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import {IS_PUBLIC_KEY} from "./public.decorator";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        console.log("I'm trying to logout in guardS!");
        const isPublicHandler = this.reflector.get<boolean>(IS_PUBLIC_KEY, context.getHandler());
        const isPublicClass = this.reflector.get<boolean>(IS_PUBLIC_KEY, context.getClass());
        const isPublic = isPublicHandler || isPublicClass;

        if (isPublic) {
            return true;
        }

        const requiredRoles = this.reflector.get<string[]>(
            'roles',
            context.getHandler(),
        );

        const request = context.switchToHttp().getRequest<Request>();

        const user = request.session?.userId ? {
            userId: request.session.userId,
            email: request.session.email,
            roles: request.session.roles
        } : undefined;

        if (!user) {
            throw new UnauthorizedException('Пользователь не авторизован');
        }

        if (requiredRoles && !requiredRoles.some(role => user.roles.includes(role))) {
            throw new ForbiddenException('Нет доступа');
        }

        return true;
    }
}

// import {
//     CanActivate,
//     ExecutionContext,
//     Injectable,
//     UnauthorizedException,
//     ForbiddenException,
// } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { Request, Response } from 'express';
// import { IS_PUBLIC_KEY } from "./public.decorator";
// import { SessionContainer } from 'supertokens-node/recipe/session';
// import { verifySession } from 'supertokens-node/recipe/session/framework/express';
//
// @Injectable()
// export class AuthGuard implements CanActivate {
//     constructor(private reflector: Reflector) {}
//
//     async canActivate(context: ExecutionContext): Promise<boolean> {
//         const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
//             context.getHandler(),
//             context.getClass(),
//         ]);
//
//         if (isPublic) {
//             return true;
//         }
//
//         const request = context.switchToHttp().getRequest<Request & { session?: SessionContainer, user?: any }>();
//         const response = context.switchToHttp().getResponse<Response>();
//
//         try {
//             // 1. Проверяем сессию SuperTokens (работает и для Bearer Token, и для кук)
//             await verifySession()(request, response, () => {});
//
//             // 2. Если сессия есть, получаем данные пользователя
//             if (request.session) {
//                 const userId = request.session.getUserId();
//                 const roles = request.session.getAccessTokenPayload()['roles'] || [];
//
//                 // Проверка ролей
//                 const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
//                 if (requiredRoles && !requiredRoles.some(role => roles.includes(role))) {
//                     throw new ForbiddenException('Нет доступа');
//                 }
//
//                 // Добавляем пользователя в запрос
//                 request.user = { userId, roles };
//                 console.log("I'm here in guard");
//                 return true;
//             }
//         } catch (e) {
//             console.error('Ошибка проверки сессии:', e);
//         }
//
//         // 3. Если SuperTokens сессия не найдена, проверяем express-session (для обратной совместимости)
//         if (request.session?.userId) {
//             const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
//             if (requiredRoles && !requiredRoles.some(role => request.session?.roles.includes(role))) {
//                 throw new ForbiddenException('Нет доступа');
//             }
//             return true;
//         }
//
//         throw new UnauthorizedException('Пользователь не авторизован');
//     }
// }

// import {
//     CanActivate,
//     ExecutionContext,
//     Injectable,
//     UnauthorizedException,
//     ForbiddenException,
// } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { Request, Response } from 'express';
// import { IS_PUBLIC_KEY } from "./public.decorator";
// import { SessionContainer } from 'supertokens-node/recipe/session';
// import { verifySession } from 'supertokens-node/recipe/session/framework/express';
//
// @Injectable()
// export class AuthGuard implements CanActivate {
//     constructor(private reflector: Reflector) {}
//
//     async canActivate(context: ExecutionContext): Promise<boolean> {
//         const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
//             context.getHandler(),
//             context.getClass(),
//         ]);
//
//         if (isPublic) {
//             return true;
//         }
//
//         const request = context.switchToHttp().getRequest<Request & { session?: SessionContainer, user?: any }>();
//         const response = context.switchToHttp().getResponse<Response>();
//
//         try {
//             // 1. Проверяем сессию SuperTokens (работает и для Bearer Token, и для кук)
//             await verifySession()(request, response, () => {});
//
//             // 2. Если сессия есть, получаем данные пользователя
//             if (request.session) {
//                 const userId = request.session.getUserId();
//                 const roles = request.session.getAccessTokenPayload()['roles'] || [];
//
//                 // Проверка ролей
//                 const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
//                 if (requiredRoles && !requiredRoles.some(role => roles.includes(role))) {
//                     throw new ForbiddenException('Нет доступа');
//                 }
//
//                 // Добавляем пользователя в запрос
//                 request.user = { userId, roles };
//                 console.log("I'm here in guard");
//                 return true;
//             }
//         } catch (e) {
//             console.error('Ошибка проверки сессии:', e);
//         }
//
//         // 3. Если SuperTokens сессия не найдена, проверяем express-session (для обратной совместимости)
//         if (request.session?.userId) {
//             const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
//             if (requiredRoles && !requiredRoles.some(role => request.session?.roles.includes(role))) {
//                 throw new ForbiddenException('Нет доступа');
//             }
//             return true;
//         }
//
//         throw new UnauthorizedException('Пользователь не авторизован');
//     }
// }