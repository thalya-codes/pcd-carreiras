import { CreateFeedbackDto, FeedbackDto } from "src/application/dtos/feedback.dto";
import { CompanyRatingDto } from "src/application/dtos/CompanyRatingDto";

export interface IFeedbackRepository {
  create(createFeedbackDto: CreateFeedbackDto): Promise<FeedbackDto>;
  findOne(id: string): Promise<FeedbackDto>;
  findAll(): Promise<FeedbackDto[]>;
  findTopCompaniesByAccessibilityRating(limit: number): Promise<CompanyRatingDto[]>;
}

export interface IFeedbackService {
  createFeedback(createFeedbackDto: CreateFeedbackDto): Promise<FeedbackDto>;
  findOneFeedback(id: string): Promise<FeedbackDto>;
  findAllFeedback(): Promise<FeedbackDto[]>;
  findTopCompaniesByAccessibilityRating(limit: number): Promise<CompanyRatingDto[]>;
}