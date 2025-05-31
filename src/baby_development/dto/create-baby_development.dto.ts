import { BadRequestException } from '@nestjs/common';
import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

class OrganDevelopmentInput {
  @Type(() => Number)
  @IsNumber({}, { message: 'organId must be the number or number string' })
  organId: number;
  @IsNotEmpty()
  @IsString()
  development_stage: string;
}

export class CreateBabyDevelopmentDto {
  @Transform(({ value }) => {
    if (value === '' || value === undefined || value === null) {
      throw new BadRequestException('weekId should not be empty');
    }
    const r = parseInt(value);
    if (isNaN(r)) {
      throw new BadRequestException('weekId must be a number');
    }
    return r;
  })
  @IsNotEmpty()
  @IsNumber()
  weekId: number;

  @IsString()
  @IsNotEmpty()
  weight_kg: string;

  @IsString()
  @IsNotEmpty()
  length_cm: string;

  @IsString()
  @IsNotEmpty()
  milestones: string;

  @IsString()
  @IsNotEmpty()
  sensory_development: string;

  @IsOptional()
  @IsArray()
  @Type(() => OrganDevelopmentInput)
  @ValidateNested({ each: true })
  organ_developments?: OrganDevelopmentInput[];
}
