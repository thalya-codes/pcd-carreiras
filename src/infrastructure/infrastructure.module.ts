import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobVacancyEntity } from 'src/domain/entities/job-vacancy.entity';
import { CompanyEntity } from 'src/domain/entities/company.entity';
import { JobVacancyRepository } from './repositories/job-vacancy.repository';
import { CompanyRepository } from './repositories/company.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEntity, JobVacancyEntity])],
  providers: [
    {
      provide: 'ICompanyRepository',
      useClass: CompanyRepository,
    },
    {
      provide: 'IJobVacancyRepository',
      useClass: JobVacancyRepository,
    },
  ],
  exports: ['ICompanyRepository', 'IJobVacancyRepository'],
})
export class InfrastructureModule {}
