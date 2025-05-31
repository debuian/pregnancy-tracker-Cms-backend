import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, map, throwError } from 'rxjs';

@Injectable()
export class AppInterceptors implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const logger = new Logger('AppInterceptors');
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();

    // Get request metadata
    const className = context.getClass().name;
    const handlerName = context.getHandler().name;
    const method = request.method;
    const url = request.originalUrl;
    const requestBody = this.sanitizeBody(request.body);
    const files = request.files || request.file;
    const userAgent = request.get('user-agent') || '';
    const ip = request.ip || request.connection?.remoteAddress;

    const logMessage = [
      `Incoming Request:`,
      `Class: ${className}`,
      `Handler: ${handlerName}`,
      `Method: ${method} url}`,
      `IP: ${ip}`,
      `User-Agent: ${userAgent}`,
      `Body: ${JSON.stringify(requestBody)}`,
      files ? `Files: ${JSON.stringify(this.sanitizeFiles(files))}` : '',
    ]
      .filter(Boolean)
      .join('\n');
    logger.verbose(logMessage);

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

  private sanitizeBody(body: any): any {
    // Remove sensitive information from logs
    if (!body) return body;

    const sanitized = { ...body };
    const sensitiveFields = ['password', 'token', 'creditCard', 'ssn'];

    sensitiveFields.forEach((field) => {
      if (sanitized[field]) {
        sanitized[field] = '***REDACTED***';
      }
    });
    console.log(sanitized);

    return sanitized;
  }

  private sanitizeFiles(files: any): any {
    if (!files) return files;

    if (Array.isArray(files)) {
      return files.map((file) => ({
        originalname: file.originalname,
        mimetype: file.mimetype,
        size: file.size,
      }));
    }

    return {
      originalname: files.originalname,
      mimetype: files.mimetype,
      size: files.size,
    };
  }
}
