import { IsInt, IsString, IsUUID, Max, Min } from 'class-validator';

export class CreateFeedbackDto {
  @IsUUID()
  companyId: string;

  @IsInt()
  @Min(1)
  @Max(5)
  score: number;

  @IsString()
  comment: string;
}
