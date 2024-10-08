import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ApplicationModule } from './application/application.module';
import { DomainModule } from './domain/domain.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { CompanyEntity } from './domain/entities/company.entity';
import { FeedbackEntity } from './domain/entities/feedback.entity';
import { JobVacancyEntity } from './domain/entities/job-vacancy.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.database'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [CompanyEntity, FeedbackEntity, JobVacancyEntity],
      synchronize: true,
    }),
    ApplicationModule,
    DomainModule,
    InfrastructureModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
