import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/global/entity/baseEntity';
import { MotherDevelopmentEntity } from './mother_development.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'mother_media' })
export class MotherMediaEntity extends BaseEntity {
  @ManyToOne(() => MotherDevelopmentEntity, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  motherDevelopment: MotherDevelopmentEntity;

  @ApiProperty({
    type: String,
    description: 'URL of the media file',
    example: 'https://example.com/media.jpg',
  })
  @Column()
  mediaUrl: string;

  @ApiProperty({
    type: String,
    description: 'Caption or description for the media',
    example: 'First ultrasound image',
  })
  @Column()
  caption: string;

  @ApiProperty({
    type: String,
    description: 'Type of media (image, video, audio)',
    example: 'image',
  })
  @Column({ type: 'enum', enum: ['image', 'video', 'audio'], default: 'image' })
  mediaType: string;
}
