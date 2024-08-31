import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class BaseCompanyDto {
  @ApiProperty({
    example: 'Nome empresa',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiPropertyOptional({
    example: 'Descrição',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    example: 'id-vaga',
  })
  @IsOptional()
  @IsArray()
  job_vacancies?: string[];

  @ApiPropertyOptional({
    example: 'id-feedback',
  })
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
