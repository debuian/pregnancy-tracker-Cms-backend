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
  @IsNotEmpty()
  @Type(() => Number)
  symptomId: number;

  @IsNotEmpty()
  @IsString()
  severity: string;
}
export class CreateMotherDevelopmentDto {
  // @Transform(({ value }) => {
  //   if (value === '' || value === undefined || value === null) {
  //     throw new BadRequestException('weekId should not be empty');
  //   }
  //   const r = parseInt(value);
  //   if (isNaN(r)) {
  //     throw new BadRequestException('weekId must be a number');
  //   }
  //   return r;
  // })
  @Type(() => Number)
  @IsNotEmpty()
  @IsNumber()
  weekId: number;

  @IsString()
  @IsNotEmpty()
  physical_changes: string;

  @IsString()
  @IsNotEmpty()
  hormonal_changes: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => SymptomDto)
  symptoms: SymptomDto[];
}

// export class CreateMotherDevelopmentFormDto {
//   files?: Express.Multer.File[];
//   data: string; // Will contain stringified CreateMotherDevelopmentDto
// }

export class CreateMotherDeveSwagger {
  @ApiProperty({
    type: 'array',
    items: {
      type: 'string',
      format: 'binary',
    },
    description: 'Development photos/documents',
    required: false,
  })
  files?: any[];

  @ApiProperty({
    type: CreateMotherDevelopmentDto,
    description: 'Baby development data as JSON string',
    example: JSON.stringify({
      weekId: 2,
      physical_changes:
        'Increased breast tenderness, slight abdominal swelling.',
      hormonal_changes:
        'Estrogen and progesterone levels continue to rise, leading to fatigue and nausea.',
      symptoms: [
        {
          symptomId: 1,
          severity: 'Mild',
        },
      ],
    }),
  })
  data: string;
}
