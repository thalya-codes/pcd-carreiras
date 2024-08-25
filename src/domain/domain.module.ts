import { Module } from '@nestjs/common';
import { FeedbackEntity } from './entities/feedback.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IFeedbackService } from './interfaces/feedback.interface';
import { FeedbackService } from './services/feedback.service';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';

@Module({
  imports: [TypeOrmModule.forFeature([FeedbackEntity]), InfrastructureModule],
  providers: [{ provide: 'IFeedbackService', useClass: FeedbackService }],
  exports: ['IFeedbackService'] 
})
export class DomainModule {}
