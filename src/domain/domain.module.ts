import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyEntity } from './entities/company.entity';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { CompanyService } from './services/company.service';
import { FeedbackService } from './services/feedback.service';
import { FeedbackEntity } from './entities/feedback.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEntity, FeedbackEntity]), InfrastructureModule],
  providers: [{ provide: 'ICompanyService', useClass: CompanyService }, { provide: 'IFeedbackService', useClass: FeedbackService }],
  exports: ['IFeedbackService', 'ICompanyService'],
})
export class DomainModule {}
