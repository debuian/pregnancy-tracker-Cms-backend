import { PartialType } from '@nestjs/mapped-types';
import { CreateMotherDevelopmentDto } from './create-mother_development.dto';

export class UpdateMotherDevelopmentDto extends PartialType(
  CreateMotherDevelopmentDto,
) {}
