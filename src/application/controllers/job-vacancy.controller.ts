import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { IJobVacancyService } from 'src/domain/interfaces/job-vacancy.interface';
import {
  JobVacancyDto,
  CreateJobVacancyDto,
} from 'src/application/dtos/job-vacancy.dto';

@Controller('job-vacancy')
export class JobVacancyController {
  constructor(
    @Inject('IJobVacancyService')
    private readonly companyService: IJobVacancyService,
  ) {}
  @Post('create')
  async CreateJobVacancyDto(
    @Body() createJobVacancyDto: CreateJobVacancyDto,
  ): Promise<JobVacancyDto> {
    return await this.companyService.createJobVacancy(createJobVacancyDto);
  }

  @Get()
  async getAllCompanies(): Promise<JobVacancyDto[]> {
    return await this.companyService.findAllJobVacancies();
  }

  @Get(':id')
  async getOneJobVacancy(
    @Param() { id }: { id: string },
  ): Promise<JobVacancyDto> {
    return await this.companyService.findOneJobVacancy(id);
  }
}
