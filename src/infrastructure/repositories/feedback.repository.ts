import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IFeedbackRepository } from "src/domain/interfaces/feedback.interface";
import { CreateFeedbackDto, FeedbackDto } from "src/application/dtos/feedback.dto";
import { FeedbackEntity } from "src/domain/entities/feedback.entity";
import { CompanyRatingDto } from "src/application/dtos/CompanyRatingDto";

@Injectable()
export class FeedbackRepository implements IFeedbackRepository {
  constructor(
    @InjectRepository(FeedbackEntity)
    private readonly feedbackRepository: Repository<FeedbackEntity>,
  ) {}

  async create(createFeedbackDto: CreateFeedbackDto): Promise<FeedbackDto> {
    const feedback = this.feedbackRepository.create(createFeedbackDto);
    return await this.feedbackRepository.save(feedback);
  }

  async findOne(id: string): Promise<FeedbackDto> {
    return await this.feedbackRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<FeedbackDto[]> {
    return await this.feedbackRepository.find();
  }

  async findTopCompaniesByAccessibilityRating(limit: number): Promise<CompanyRatingDto[]> {
    const feedbacks = await this.feedbackRepository
      .createQueryBuilder('feedback')
      .innerJoinAndSelect('feedback.company', 'company')
      .select('company.id')
      .addSelect('company.name')
      .addSelect('AVG(feedback.accessibilityRating)', 'avgRating')
      .groupBy('company.id')
      .orderBy('avgRating', 'DESC')
      .limit(limit)
      .getRawMany();
  
    return feedbacks.map(feedback => ({
      id: feedback.company_id,  
      name: feedback.company_name, 
      avgRating: feedback.avgRating
    }));
  }

}
