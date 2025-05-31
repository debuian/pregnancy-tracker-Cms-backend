import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

interface response {
  status: string;
  timeStamp: number;
}

interface ErrorResponse extends response {
  message: string;
}
@Catch()
export class ApplicationExceptionFilters implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: any, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const errroObj: ErrorResponse = {
      status: 'error',
      message: exception?.response?.message || exception.name,
      timeStamp: Date.now(),
    };

    console.log(
      'This is a log of exception object {} from global catch filter !',
    );
    console.log(
      '**************************************************************',
    );
    console.error(`Exception caught in ApplicationExceptionFilters:
      Path: ${request.url}
      Method: ${request.method}
      `);
    console.log(
      '**************************************************************',
    );
    console.log(exception);
    console.log(
      '**************************************************************',
    );

    httpAdapter.reply(ctx.getResponse(), errroObj, httpStatus);
  }
}
