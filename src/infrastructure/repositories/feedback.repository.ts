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

  async findTopCompaniesByAccessibilityRating() {
    return this.feedbackRepository.query(`
      SELECT 
        "company"."id" AS "company_id", 
        "company"."name" AS "company_name", 
        AVG("feedback"."accessibilityRating") AS "avgRating" 
      FROM 
        "feedback_entity" "feedback"
      INNER JOIN 
        "company_entity" "company" 
      ON 
        "company"."id"::uuid = "feedback"."company_id"::uuid
      GROUP BY 
        "company"."id", 
        "company"."name"
      ORDER BY 
        "avgRating" DESC 
      LIMIT 5;
    `);
  }
}
