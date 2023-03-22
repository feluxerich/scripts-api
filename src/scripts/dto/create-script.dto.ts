import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateScriptDto {
  @ApiProperty()
  @IsNotEmpty()
  filename: string;

  @ApiProperty()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ nullable: true, maxLength: 128 })
  @MaxLength(128)
  description: string;
}
