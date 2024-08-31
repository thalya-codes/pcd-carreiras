import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyEntity } from 'src/domain/entities/company.entity';
import { CompanyRepository } from './repositories/company.repository';
import { FeedbackRepository } from './repositories/feedback.repository';
import { FeedbackEntity } from 'src/domain/entities/feedback.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEntity, FeedbackEntity])],
  providers: [
    {
      provide: 'ICompanyRepository',
      useClass: CompanyRepository,
    },
    {
      provide: 'IFeedbackRepository',
      useClass: FeedbackRepository,
    }
  ],
  exports: ['ICompanyRepository', 'IFeedbackRepository'],
})
export class InfrastructureModule {}
