import { IsNumber, IsString } from 'class-validator';

export class CreateCardDto {
  @IsNumber()
  readonly type: number;

  @IsString()
  readonly questions: string;
}
