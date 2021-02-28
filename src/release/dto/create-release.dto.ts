import { IsNotEmpty, IsString, IsUrl, MaxLength } from 'class-validator';

export class CreateReleaseDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly branch: string;

  @IsString()
  @MaxLength(40)
  readonly commit: string;

  @IsUrl()
  readonly url: string;

  @IsString()
  readonly author: string;
}
