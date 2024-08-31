import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IFeedbackRepository } from "src/domain/interfaces/feedback.interface";
import { CreateFeedbackDto, FeedbackDto } from "src/application/dtos/feedback.dto";
import { FeedbackEntity } from "src/domain/entities/feedback.entity";
import { CompanyRatingDto } from "src/application/dtos/CompanyRatingDto";
import { CompanyEntity } from "src/domain/entities/company.entity";

@Injectable()
export class FeedbackRepository implements IFeedbackRepository {
  constructor(
    @InjectRepository(FeedbackEntity)
    private readonly feedbackRepository: Repository<FeedbackEntity>,
    @InjectRepository(CompanyEntity)
    private readonly companyRepository: Repository<CompanyEntity>
  ) {}

  async create(createFeedbackDto: CreateFeedbackDto): Promise<FeedbackDto> {
    const company = await this.companyRepository.findOne({ where: { id: createFeedbackDto.company_id } });
    if (!company) {
      throw new Error('Company not found');
    }

    const feedback = this.feedbackRepository.create({
      ...createFeedbackDto,
      company: company // Associe o feedback à empresa
    });
    
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
