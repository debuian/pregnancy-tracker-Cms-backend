import { PartialType } from '@nestjs/mapped-types';
import { CreateBabyDevelopmentDto } from './create-baby_development.dto';

export class UpdateBabyDevelopmentDto extends PartialType(
  CreateBabyDevelopmentDto,
) {}
