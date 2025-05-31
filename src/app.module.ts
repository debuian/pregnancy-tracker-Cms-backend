import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppInterceptors } from './global/interceptors';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { databaseConfig } from './global/config/database/typeORM.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';
import { TrimestersModule } from './trimesters/trimesters.module';
import { WeeksModule } from './weeks/weeks.module';
import { BabyDevelopmentModule } from './baby_development/baby_development.module';
import { OrganModule } from './organ/organ.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { NutrientsModule } from './nutrients/nutrients.module';
import { TrimesterNutrientsModule } from './trimester_nutrients/trimester_nutrients.module';
import { MotherDevelopmentModule } from './mother_development/mother_development.module';
import { SymptomsModule } from './symptoms/symptoms.module';
import { ApplicationExceptionFilters } from './global/ExceptionFilters';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
      cache: true,
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        // await new Promise((resolve) => setTimeout(resolve, 5000));
        const config = configService.get<DataSourceOptions>('DBConfig');
        if (!config) {
          throw new Error('Database configuration is missing!');
        } else {
          Logger.log('Database configuration loaded successfully!');
        }
        return {
          ...config,
        };
      },
    }),
    TrimestersModule,
    WeeksModule,
    BabyDevelopmentModule,
    OrganModule,
    NutrientsModule,
    TrimesterNutrientsModule,
    MotherDevelopmentModule,
    SymptomsModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: 'APP_INTERCEPTOR',
      useClass: AppInterceptors,
    },
    {
      provide: 'APP_FILTER',
      useClass: ApplicationExceptionFilters,
    },
    AppService,
  ],
})
export class AppModule {}
