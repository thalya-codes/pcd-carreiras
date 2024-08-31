import { CreateFeedbackDto } from "src/application/dtos/feedback.dto";
import { FeedbackEntity } from "../entities/feedback.entity";

export interface IFeedbackRepository {
  create(createFeedbackDto: CreateFeedbackDto): Promise<FeedbackEntity>;
  findOne(id: string): Promise<FeedbackEntity>;
  findAll(): Promise<FeedbackEntity[]>;
}

export interface IFeedbackService {
  createFeedback(createFeedbackDto: CreateFeedbackDto): Promise<FeedbackEntity>;
  findOneFeedback(id: string): Promise<FeedbackEntity>;
  findAllFeedback(): Promise<FeedbackEntity[]>;
}