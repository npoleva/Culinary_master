import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { createHash } from 'crypto';
import { Response, Request } from 'express';

@Injectable()
export class ETagInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const ctx = context.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        if (!['GET', 'HEAD', 'PATCH', 'POST', 'DELETE'].includes(request.method)) {
            response.setHeader('Cache-Control', 'no-store');
            return next.handle();
        }

        return next.handle().pipe(
            tap((body) => {
                if (!body) return;

                const etag = `"${this.generateETag(JSON.stringify(body))}"`;
                const ifNoneMatch = request.headers['if-none-match'];

                if (ifNoneMatch === etag) {
                    response.status(304).end();
                    return;
                }

                if (!response.getHeader('Cache-Control')) {
                    response.setHeader('Cache-Control', 'public, max-age=60');
                }
                response.setHeader('ETag', etag);
            })
        );
    }

    private generateETag(data: string): string {
        return createHash('sha1').update(data).digest('hex');
    }
}