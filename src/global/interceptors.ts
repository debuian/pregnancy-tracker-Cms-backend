import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, map, throwError } from 'rxjs';

@Injectable()
export class AppInterceptors implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();

    // Intercept the request here
    return next.handle().pipe(
      map((result) => {
        const res: SuccessResponse<typeof result> = {
          status: 'success',
          data: result,
        };
        return res;
      }),
      // Log the response
      catchError((error) => {
        return throwError(() => error);
      }),
    );
  }
}
