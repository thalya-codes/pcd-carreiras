import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyEntity } from './entities/company.entity';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { CompanyService } from './services/company.service';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEntity]), InfrastructureModule],
  providers: [{ provide: 'ICompanyService', useClass: CompanyService }],
  exports: ['ICompanyService'],
})
export class DomainModule {}
