import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

export type BaseIdDataType = number;
const BaseIdExample = 1;

@Entity()
export class BaseEntity {
  // Api Documentation for the base entity ID
  @ApiProperty({
    example: BaseIdExample,
    description: 'Unique identifier',
    type: typeof BaseIdExample === 'number' ? 'integer' : 'string',
  })
  // Primary key for the base entity
  @PrimaryGeneratedColumn()
  id: BaseIdDataType;
}
