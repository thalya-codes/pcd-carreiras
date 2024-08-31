import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateJobVacancyDto,
  JobVacancyDto,
} from 'src/application/dtos/job-vacancy.dto';
import { JobVacancyEntity } from 'src/domain/entities/job-vacancy.entity';
import { IJobVacancyRepository } from 'src/domain/interfaces/job-vacancy.interface';

@Injectable()
export class JobVacancyRepository implements IJobVacancyRepository {
  constructor(
    @InjectRepository(JobVacancyEntity)
    private readonly jobVacancyRepository: Repository<JobVacancyEntity>,
  ) {}

  async create(createVacancyDto: CreateJobVacancyDto): Promise<JobVacancyDto> {
    const entity = this.jobVacancyRepository.create(createVacancyDto);
    return await this.jobVacancyRepository.save(entity);
  }

  async findOne(id: string): Promise<JobVacancyDto> {
    return await this.jobVacancyRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<JobVacancyDto[]> {
    return await this.jobVacancyRepository.find();
  }
}
