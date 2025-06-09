import { BadRequestException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

class SymptomDto {
  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  @Type(() => Number)
  symptomId: number;

  @ApiProperty({ example: 'Mild' })
  @IsNotEmpty()
  @IsString()
  severity: string;
}
export class CreateMotherDevelopmentDto {
  @ApiProperty({
    example: '1',
  })
  @Type(() => Number)
  @IsNotEmpty()
  @IsNumber()
  weekId: number;

  @ApiProperty({
    example: 'increased breast tenderness, slight abdominal swelling.',
  })
  @IsString()
  @IsNotEmpty()
  physical_changes: string;

  @ApiProperty({
    example:
      'Estrogen and progesterone levels continue to rise, leading to fatigue and nausea.',
  })
  @IsString()
  @IsNotEmpty()
  hormonal_changes: string;

  @ApiProperty({
    type: [SymptomDto],
    required: false,
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => SymptomDto)
  symptoms: SymptomDto[];
}

export class CreateMotherDeveSwagger extends CreateMotherDevelopmentDto {
  @ApiProperty({
    type: 'string',
    format: 'binary',
    isArray: true,
    description: 'Development photos/documents',
    required: false,
  })
  files?: any[];
}
