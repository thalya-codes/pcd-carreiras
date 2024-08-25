import { Inject, Injectable } from "@nestjs/common";
import { IFeedbackRepository, IFeedbackService } from "../interfaces/feedback.interface";
import { CreateFeedbackDto } from "src/application/dtos/feedback.dto";
import { FeedbackEntity } from "../entities/feedback.entity";

@Injectable()
export class FeedbackService implements IFeedbackService {

 constructor(
  @Inject('IFeedbackRepository')
  private readonly feedbackRepository: IFeedbackRepository
 ) { }

 async createFeedback(createFeedbackDto: CreateFeedbackDto): Promise<FeedbackEntity> {
  try {
   return await this.feedbackRepository.create(createFeedbackDto);
  } catch (error) {
   console.error({ error });
  }
 }

 async findAllFeedback(): Promise<FeedbackEntity[]> {
  try {
   return await this.feedbackRepository.findAll();
  } catch (error) {
   console.error({ error });
  }
 }

 async findOneFeedback(id: string): Promise<FeedbackEntity> {
  try {
   return this.feedbackRepository.findOne(id);
  } catch (error) {
   console.error({ error });
  }
 }

}