import { ApiProperty } from '@nestjs/swagger';

export class CompanyRatingDto {
  @ApiProperty({ example: 'id' })
  id: string;

  @ApiProperty({ example: 'Nome da empresa' })
  name: string;

  @ApiProperty({ example: 'Pontuação da empresa' })
  avgRating: number;
}
