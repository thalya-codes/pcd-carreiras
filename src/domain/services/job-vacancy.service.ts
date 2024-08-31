import { Inject, Injectable } from '@nestjs/common';
import {
  IJobVacancyRepository,
  IJobVacancyService,
} from 'src/domain/interfaces/job-vacancy.interface';
import {
  CreateJobVacancyDto,
  JobVacancyDto,
} from 'src/application/dtos/job-vacancy.dto';

@Injectable()
export class JobVacancyService implements IJobVacancyService {
  constructor(
    @Inject('IJobVacancyRepository')
    private readonly jobVacancyRepository: IJobVacancyRepository,
  ) {}

  async createJobVacancy(
    createJobVacancyDto: CreateJobVacancyDto,
  ): Promise<JobVacancyDto> {
    try {
      return await this.jobVacancyRepository.create(createJobVacancyDto);
    } catch (error) {
      console.error({ error });
    }
  }

  async findAllJobVacancies(): Promise<JobVacancyDto[]> {
    try {
      return await this.jobVacancyRepository.findAll();
    } catch (error) {
      console.error({ error });
    }
  }

  async findOneJobVacancy(id: string): Promise<JobVacancyDto> {
    try {
      return this.jobVacancyRepository.findOne(id);
    } catch (error) {
      console.error({ error });
    }
  }
}
