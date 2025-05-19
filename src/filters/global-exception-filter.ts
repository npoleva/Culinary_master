import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Prisma } from '@prisma/client';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctxType = host.getType();

        if (ctxType === 'http') {
            const ctx = host.switchToHttp();
            const response = ctx.getResponse<Response>();
            const request = ctx.getRequest<Request>();

            if (response.headersSent) {
                return;
            }

            let status = HttpStatus.INTERNAL_SERVER_ERROR;
            let message = 'Internal server error';

            if (exception instanceof HttpException) {
                status = exception.getStatus();
                const res = exception.getResponse();
                message = typeof res === 'string' ? res : (res as any).message || message;
            }
            else if (exception instanceof Prisma.PrismaClientKnownRequestError) {
                status = HttpStatus.BAD_REQUEST;
                switch (exception.code) {
                    case 'P2002':
                        message = `Запись с такими данными уже существует`;
                        break;
                    case 'P2025':
                        message = `Запрашиваемая запись не найдена`;
                        status = HttpStatus.NOT_FOUND;
                        break;
                    default:
                        message = `Ошибка базы данных: ${exception.code}`;
                }
            }

            if (request.originalUrl.startsWith('/api')) {
                response.status(status).json({
                    statusCode: status,
                    timestamp: new Date().toISOString(),
                    path: request.url,
                    message,
                });
            } else {
                const template = this.getErrorTemplate(status);
                response.status(status).render(template, {
                    status,
                    message,
                    path: request.url,
                    timestamp: new Date().toISOString(),
                    layout: 'layouts/error-layout'
                });
            }
        }
        else {
            throw exception;
        }
    }

    private getErrorTemplate(status: number): string {
        const templates = {
            400: 'errors/bad-request',
            404: 'errors/not-found',
            500: 'errors/server-error',
            default: 'errors/server-error',
        };
        return templates[status] || templates.default;
    }
}
