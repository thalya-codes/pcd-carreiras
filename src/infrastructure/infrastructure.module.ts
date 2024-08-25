import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackEntity } from 'src/domain/entities/feedback.entity';
import { FeedbackRepository } from './repositories/feedback.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FeedbackEntity])],
  providers: [{
    provide: 'IFeedbackRepository',
    useClass: FeedbackRepository
  }],
  exports: ['IFeedbackRepository']
})
export class InfrastructureModule {}
