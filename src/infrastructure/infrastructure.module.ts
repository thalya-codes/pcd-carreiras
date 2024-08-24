import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyEntity } from 'src/domain/entities/company.entity';
import { CompanyRepository } from './repositories/company.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEntity])],
  providers: [
    {
      provide: 'ICompanyRepository',
      useClass: CompanyRepository,
    },
  ],
  exports: ['ICompanyRepository'],
})
export class InfrastructureModule {}
