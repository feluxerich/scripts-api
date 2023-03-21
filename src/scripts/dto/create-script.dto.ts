import { ApiProperty } from '@nestjs/swagger';

export class CreateScriptDto {
  @ApiProperty()
  filename: string;

  @ApiProperty()
  content: string;

  @ApiProperty({ nullable: true })
  description: string;
}
