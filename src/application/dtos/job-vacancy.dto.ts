import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class BaseJobVacancyDto {
  @ApiProperty({
    example: 'Título da vaga',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    example: 'Descrição da vaga',
  })
  @IsNotEmpty()
  @IsString()
  description?: string;

  @ApiProperty({
    example: 'id-empresa',
  })
  @IsNotEmpty()
  @IsString()
  company_id: string;
}

export class JobVacancyDto extends BaseJobVacancyDto {
  @ApiProperty({
    example: 'id',
  })
  @IsNotEmpty()
  @IsString()
  id: string;
}

export class CreateJobVacancyDto extends BaseJobVacancyDto {}
