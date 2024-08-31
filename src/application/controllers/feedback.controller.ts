import { Body, Controller, Get, Inject, Param, Post } from "@nestjs/common";
import { IFeedbackService } from "src/domain/interfaces/feedback.interface";
import { FeedbackService } from "src/domain/services/feedback.service";
import { CreateFeedbackDto, FeedbackDto } from "../dtos/feedback.dto";
import { FeedbackEntity } from "src/domain/entities/feedback.entity";
import { CompanyRatingDto } from "../dtos/CompanyRatingDto";

@Controller('feedback')
export class FeedbackController {
 constructor(
  @Inject('IFeedbackService')
  private readonly feedbackService: IFeedbackService
 ){}

 @Post('create')
 async CreateFeedback(
   @Body() createFeedbackDto: CreateFeedbackDto,
 ): Promise<FeedbackDto> {
   return await this.feedbackService.createFeedback(createFeedbackDto);
 }

 @Get()
 async getAllFeedback(): Promise<FeedbackDto[]> {
   return await this.feedbackService.findAllFeedback();
 }

 @Get(':id')
 async getOneFeedback(@Param() { id }: { id: string }): Promise<FeedbackDto> {
   return await this.feedbackService.findOneFeedback(id);
 }

//  @Get('top-companies/:limit')
//  async getTopCompaniesByAccessibilityRating(
//    @Param('limit') limit: number
//  ): Promise<CompanyRatingDto[]> {  
//    return await this.feedbackService.findTopCompaniesByAccessibilityRating(limit);
//  }

}