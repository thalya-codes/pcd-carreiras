import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class BaseFeedbackDto {
  @ApiProperty({ example: '5' })
  @IsInt()
  @Min(1)
  @Max(5)
  accessibilityRating: number;

  @ApiProperty({ example: 'Comentário ....' })
  @IsString()
  comment: string;

  @ApiProperty({ example: 'id-empresa' })
  @IsNotEmpty()
  @IsString()
  company_id: string;
}

export class FeedbackDto extends BaseFeedbackDto {
  @ApiProperty({ example: 'id-feedback' })
  @IsString()
  id: string;

  @ApiProperty({ example: '10/12/2023' })
  @IsString()
  createdIn: Date;
}

export class CreateFeedbackDto extends BaseFeedbackDto {}
