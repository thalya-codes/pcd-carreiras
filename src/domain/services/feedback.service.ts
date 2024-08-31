import { Inject, Injectable } from "@nestjs/common";
import { IFeedbackRepository, IFeedbackService } from "../interfaces/feedback.interface";
import { CreateFeedbackDto, FeedbackDto } from "src/application/dtos/feedback.dto";
import { CompanyRatingDto } from "src/application/dtos/CompanyRatingDto";

@Injectable()
export class FeedbackService implements IFeedbackService {

 constructor(
  @Inject('IFeedbackRepository')
  private readonly feedbackRepository: IFeedbackRepository
 ) { }

 async createFeedback(createFeedbackDto: CreateFeedbackDto): Promise<FeedbackDto> {
  try {
   return await this.feedbackRepository.create(createFeedbackDto);
  } catch (error) {
   console.error({ error });
  }
 }

 async findAllFeedback(): Promise<FeedbackDto[]> {
  try {
   return await this.feedbackRepository.findAll();
  } catch (error) {
   console.error({ error });
  }
 }

 async findOneFeedback(id: string): Promise<FeedbackDto> {
  try {
   return this.feedbackRepository.findOne(id);
  } catch (error) {
   console.error({ error });
  }
 }

 async findTopCompaniesByAccessibilityRating(limit: number): Promise<CompanyRatingDto[]> {
  const results = await this.feedbackRepository.findTopCompaniesByAccessibilityRating(limit);
  console.log('Top Companies Results:', results); // Adicione este log para debug
  return results;
}


}