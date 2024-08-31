import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IFeedbackRepository } from "src/domain/interfaces/feedback.interface";
import { CreateFeedbackDto } from "src/application/dtos/feedback.dto";
import { FeedbackEntity } from "src/domain/entities/feedback.entity";

@Injectable()
export class FeedbackRepository implements IFeedbackRepository {
  constructor(
    @InjectRepository(FeedbackEntity)
    private readonly feedbackRepository: Repository<FeedbackEntity>,
  ) {}

  async create(createFeedbackDto: CreateFeedbackDto): Promise<FeedbackEntity> {
    const feedback = this.feedbackRepository.create(createFeedbackDto);
    return await this.feedbackRepository.save(feedback);
  }

  async findOne(id: string): Promise<FeedbackEntity> {
    return await this.feedbackRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<FeedbackEntity[]> {
    return await this.feedbackRepository.find();
  }
}
