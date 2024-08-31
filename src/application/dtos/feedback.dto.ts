import { IsInt, IsString, Max, Min } from 'class-validator';

export class CreateFeedbackDto {
  @IsString()
  companyName: string;

  @IsInt()
  @Min(1)
  @Max(5)
  accessibilityRating: number;

  @IsString()
  comment: string;
}