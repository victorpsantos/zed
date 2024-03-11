import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { config } from 'src/config/config';
import { configSchema } from 'src/config/config.schema';

import { IamModule } from 'src/modules/iam/iam.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      validationSchema: configSchema,
      validationOptions: { stripUnknown: true },
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return <TypeOrmModuleOptions>{
          ...(await configService.getOrThrow('db')),
        };
      },
    }),

    IamModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
