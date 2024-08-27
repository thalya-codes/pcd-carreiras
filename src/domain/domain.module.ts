import { Module } from '@nestjs/common';
import { CompanyEntity } from './entities/company.entity';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { CompanyService } from './services/company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobVacancyEntity } from 'src/domain/entities/job-vacancy.entity';
import { JobVacancyService } from 'src/domain/services/job-vacancy.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CompanyEntity, JobVacancyEntity]),
    InfrastructureModule,
  ],
  providers: [
    { provide: 'ICompanyService', useClass: CompanyService },
    { provide: 'IJobVacancyService', useClass: JobVacancyService },
  ],
  exports: ['ICompanyService', 'IJobVacancyService'],
})
export class DomainModule {}
