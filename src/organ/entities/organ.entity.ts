import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/global/entity/baseEntity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'organ' })
export class OrganEntity extends BaseEntity {
  @ApiProperty({
    example: 'heart',
    description: 'Name of the organ',
    type: String,
  })
  @Column()
  name: string;

  @ApiProperty({
    example:
      'The heart is a muscular organ that pumps blood through the circulatory system.',
    description: 'Description of the organ',
    type: String,
  })
  @Column()
  description: string;
}
