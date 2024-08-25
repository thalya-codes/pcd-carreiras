import { Body, Controller, Get, Inject, Param, Post } from "@nestjs/common";
import { IFeedbackService } from "src/domain/interfaces/feedback.interface";
import { FeedbackService } from "src/domain/services/feedback.service";
import { CreateFeedbackDto } from "../dtos/feedback.dto";
import { FeedbackEntity } from "src/domain/entities/feedback.entity";

@Controller('feedback')
export class FeedbackController {
 constructor(
  @Inject('IFeedbackService')
  private readonly feedbackService: IFeedbackService
 ){}

 @Post('create')
 async CreateFeedbackDto(
   @Body() createFeedbackDto: CreateFeedbackDto,
 ): Promise<FeedbackEntity> {
   return await this.feedbackService.createFeedback(createFeedbackDto);
 }

 @Get()
 async getAllFeedback(): Promise<FeedbackEntity[]> {
   return await this.feedbackService.findAllFeedback();
 }

 @Get(':id')
 async getOneFeedback(@Param() { id }: { id: string }): Promise<FeedbackEntity> {
   return await this.feedbackService.findOneFeedback(id);
 }
}