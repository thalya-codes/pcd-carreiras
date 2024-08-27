import { Module } from '@nestjs/common';
import { JobVacancyController } from './controllers/job-vacancy.controller';
import { CompanyController } from './controllers/company.controller';
import { DomainModule } from 'src/domain/domain.module';
@Module({
  imports: [DomainModule],
  controllers: [CompanyController, JobVacancyController],
})
export class ApplicationModule {}
