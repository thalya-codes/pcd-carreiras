import { IsNotEmpty, IsString } from 'class-validator';

export class BaseJobVacancyDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsString()
  company_id: string;
}

export class JobVacancyDto extends BaseJobVacancyDto {
  @IsNotEmpty()
  @IsString()
  id: string;
}

export class CreateJobVacancyDto extends BaseJobVacancyDto {}
