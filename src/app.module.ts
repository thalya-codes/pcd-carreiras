import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ApplicationModule } from './application/application.module';
import { DomainModule } from './domain/domain.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { CompanyEntity } from './domain/entities/company.entity';
import { FeedbackEntity } from './domain/entities/feedback.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.database'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_NAME,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      entities: [CompanyEntity, FeedbackEntity],
      synchronize: true,
      // url: process.env.DATABASE_URL,
      // entities: [CompanyEntity, FeedbackEntity],
    }),
    ApplicationModule,
    DomainModule,
    InfrastructureModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
