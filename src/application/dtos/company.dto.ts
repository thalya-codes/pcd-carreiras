import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class BaseCompanyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsArray()
  job_vacancies?: string[];

  @IsOptional()
  @IsArray()
  feedbacks?: string[];
}

export class CompanyDto extends BaseCompanyDto {
  @IsNotEmpty()
  @IsString()
  id: string;
}

export class CreateCompanyDto extends BaseCompanyDto {}
