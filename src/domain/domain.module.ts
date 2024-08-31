import { Module } from '@nestjs/common';
import { CompanyEntity } from './entities/company.entity';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { CompanyService } from './services/company.service';
import { FeedbackService } from './services/feedback.service';
import { FeedbackEntity } from './entities/feedback.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobVacancyEntity } from 'src/domain/entities/job-vacancy.entity';
import { JobVacancyService } from 'src/domain/services/job-vacancy.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CompanyEntity, FeedbackEntity, JobVacancyEntity]),
    InfrastructureModule,
  ],
  providers: [
    { provide: 'ICompanyService', useClass: CompanyService },
    { provide: 'IFeedbackService', useClass: FeedbackService },
    { provide: 'IJobVacancyService', useClass: JobVacancyService },
  ],
  exports: [
    'ICompanyService',
    'IFeedbackService',
    'ICompanyService',
    'IJobVacancyService',
  ],
})
export class DomainModule {}
