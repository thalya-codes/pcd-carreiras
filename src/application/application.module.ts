import { Module } from '@nestjs/common';
import { CompanyController } from './controllers/company.controller';
import { DomainModule } from 'src/domain/domain.module';
import { FeedbackController } from './controllers/feedback.controller';
@Module({
  imports: [DomainModule],
  controllers: [CompanyController, FeedbackController],
})
export class ApplicationModule {}
