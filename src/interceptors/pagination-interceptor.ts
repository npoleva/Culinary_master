import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Response as ExpressResponse } from 'express';

@Injectable()
export class PaginationInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        const response = context.switchToHttp().getResponse<ExpressResponse>();

        return next.handle().pipe(
            tap((data) => {
                const { total, totalPages } = data;

                if (total && totalPages) {
                    const pageNum = parseInt(request.query.page, 10) || 1;
                    const limitNum = parseInt(request.query.limit, 10) || 5;
                    const links: string[] = [];
                    const baseUrl = `${request.protocol}://${request.get('host')}${request.baseUrl}`;

                    if (pageNum > 1) {
                        links.push(`<${baseUrl}?page=${pageNum - 1}&limit=${limitNum}>; rel="prev"`);
                    }
                    if (pageNum < totalPages) {
                        links.push(`<${baseUrl}?page=${pageNum + 1}&limit=${limitNum}>; rel="next"`);
                    }

                    if (links.length > 0) {
                        response.setHeader('Link', links.join(', '));
                    }
                }
            })
        );
    }
}
