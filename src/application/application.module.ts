import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackEntity } from 'src/domain/entities/feedback.entity';
import { FeedbackController } from './controllers/feedback.controller';
import { DomainModule } from 'src/domain/domain.module';

@Module({
  imports: [DomainModule],
  controllers: [FeedbackController] 
})
export class ApplicationModule {}
