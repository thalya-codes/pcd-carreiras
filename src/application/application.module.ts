import { Module } from '@nestjs/common';
import { CompanyController } from './controllers/company.controller';
import { DomainModule } from 'src/domain/domain.module';
@Module({
  imports: [DomainModule],
  controllers: [CompanyController],
})
export class ApplicationModule {}
