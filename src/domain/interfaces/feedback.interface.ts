import { CreateFeedbackDto } from "src/application/dtos/feedback.dto";
import { FeedbackEntity } from "../entities/feedback.entity";
import { CompanyRatingDto } from "src/application/dtos/CompanyRatingDto";

export interface IFeedbackRepository {
  create(createFeedbackDto: CreateFeedbackDto): Promise<FeedbackEntity>;
  findOne(id: string): Promise<FeedbackEntity>;
  findAll(): Promise<FeedbackEntity[]>;
  findTopCompaniesByAccessibilityRating(limit: number): Promise<CompanyRatingDto[]>;
}

export interface IFeedbackService {
  createFeedback(createFeedbackDto: CreateFeedbackDto): Promise<FeedbackEntity>;
  findOneFeedback(id: string): Promise<FeedbackEntity>;
  findAllFeedback(): Promise<FeedbackEntity[]>;
  findTopCompaniesByAccessibilityRating(limit: number): Promise<CompanyRatingDto[]>;
}