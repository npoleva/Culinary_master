import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Response } from 'express';

@Injectable()
export class RequestProcessingTimeInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const start = Date.now();

        const type = context.getType<string>();

        let res: Response | undefined;

        if (type === 'http') {
            try {
                res = context.switchToHttp().getResponse();
            } catch (e) {
                res = undefined;
            }
        } else if (type === 'graphql') {
            try {
                const gqlCtx = GqlExecutionContext.create(context).getContext();
                res = gqlCtx.res;
            } catch (e) {
                res = undefined;
            }
        }

        return next.handle().pipe(
            tap(() => {
                const elapsed = Date.now() - start;
                if (res && !res.headersSent) {
                    res.setHeader('X-Elapsed-Time', `${elapsed}ms`);
                }
            }),
            map((data) => {
                const elapsed = Date.now() - start;
                if (type === 'http' && typeof data === 'object' && !Array.isArray(data)) {
                    return { ...data, elapsedTime: `${elapsed}ms` };
                }
                return data;
            }),
        );
    }
}
