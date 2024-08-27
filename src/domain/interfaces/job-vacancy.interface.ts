import {
  CreateJobVacancyDto,
  JobVacancyDto,
} from 'src/application/dtos/job-vacancy.dto';

export interface IJobVacancyRepository {
  create(createVacancy: CreateJobVacancyDto): Promise<JobVacancyDto>;
  findOne(id: string): Promise<JobVacancyDto>;
  findAll(): Promise<JobVacancyDto[]>;
}

export interface IJobVacancyService {
  createJobVacancy(
    createJobVacancyDto: CreateJobVacancyDto,
  ): Promise<JobVacancyDto>;
  findOneJobVacancy(id: string): Promise<JobVacancyDto>;
  findAllJobVacancies(): Promise<JobVacancyDto[]>;
}
