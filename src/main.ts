import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const config = new DocumentBuilder()
    .setTitle('Pregnancy Tracker API')
    .setDescription('API documentation for the Pregnancy Tracker application')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
    cors: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  const port = process.env.APP_PORT ?? 3000;
  await app.listen(port, () => {
    logger.log(`Nest Application is running on: http://localhost:${port}`);
    logger.log(
      `Swagger API documentation is available at: http://localhost:${port}/api`,
    );
  });
}

bootstrap();
