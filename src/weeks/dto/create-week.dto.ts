import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateWeekDto {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier for the week',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  weekNumber: number;

  @ApiProperty({
    example: 'Week 1',
    description: 'The title of the week',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    example: 'This is a summary of week 1.',
    description: 'A brief summary of the week',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  summary: string;

  @Transform(({ value }) => parseInt(value, 10))
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    example: 1,
    description: 'A detailed description of the week',
    required: true,
  })
  trimesterId: number;
}
