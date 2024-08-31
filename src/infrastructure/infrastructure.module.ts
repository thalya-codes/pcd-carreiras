import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobVacancyEntity } from 'src/domain/entities/job-vacancy.entity';
import { CompanyEntity } from 'src/domain/entities/company.entity';
import { JobVacancyRepository } from './repositories/job-vacancy.repository';
import { CompanyRepository } from './repositories/company.repository';
import { FeedbackRepository } from './repositories/feedback.repository';
import { FeedbackEntity } from 'src/domain/entities/feedback.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CompanyEntity, JobVacancyEntity, FeedbackEntity]),
  ],
  providers: [
    {
      provide: 'ICompanyRepository',
      useClass: CompanyRepository,
    },
    {
      provide: 'IJobVacancyRepository',
      useClass: JobVacancyRepository,
    },
    {
      provide: 'IFeedbackRepository',
      useClass: FeedbackRepository,
    },
  ],
  exports: [
    'ICompanyRepository',
    'IJobVacancyRepository',
    'IFeedbackRepository',
  ],
})
export class InfrastructureModule {}
