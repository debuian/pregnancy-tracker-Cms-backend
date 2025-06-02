import { BadRequestException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { BabyDevelopmentExamples } from './swagger-response';

class OrganDevelopmentInput {
  @Type(() => Number)
  @IsNumber({}, { message: 'organId must be the number or number string' })
  @ApiProperty({
    example: 1,
    description: 'ID of the organ',
  })
  organId: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Formation of the heart chambers"',
    description: 'Development stage description',
  })
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
  @ApiProperty({
    example: BabyDevelopmentExamples.CREATE.weekId,
    description: 'Week of pregnancy',
  })
  weekId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: BabyDevelopmentExamples.CREATE.weight_kg,
    description: 'Baby weight in kilograms',
  })
  weight_kg: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: BabyDevelopmentExamples.CREATE.length_cm,
    description: 'Baby length in centimeters',
  })
  length_cm: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: BabyDevelopmentExamples.CREATE.milestones,
    description: 'Developmental milestones',
  })
  milestones: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: BabyDevelopmentExamples.CREATE.sensory_development,
    description: 'Sensory development details',
  })
  sensory_development: string;

  @IsOptional()
  @IsArray()
  @Type(() => OrganDevelopmentInput)
  @ValidateNested({ each: true })
  @ApiProperty({
    type: [OrganDevelopmentInput],
    required: false,
  })
  organ_developments?: OrganDevelopmentInput[];
}

// export class CreateBabyDevelopmentSwaggerDto extends CreateBabyDevelopmentDto {
//   @ApiProperty({
//     type: 'array',
//     items: {
//       type: 'object',
//       properties: {
//         organId: { type: 'number', example: 1 },
//         development_stage: {
//           type: 'string',
//           example: 'Formation of the heart chambers',
//         },
//       },
//     },
//     required: false,
//     description: 'Organ development details',
//   })
//   declare organ_developments?: any;

//   @ApiProperty({
//     type: 'string',
//     format: 'binary',
//     isArray: true,
//     description: 'Optional files for baby development record',
//   })
//   files: any;
// }
