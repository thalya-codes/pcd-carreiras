import { IsInt, IsNotEmpty, IsOptional, IsString, Max, Min } from 'class-validator';

export class BaseFeedbackDto {
  @IsInt()
  @Min(1)
  @Max(5)
  accessibilityRating: number;

  @IsString()
  comment: string;

  @IsNotEmpty()
  @IsString()
  company_name: string;
}

export class FeedbackDto extends BaseFeedbackDto {
  @IsString()
  id: string;

  @IsString()
  createdIn: Date; 
}

export class CreateFeedbackDto extends BaseFeedbackDto {}
