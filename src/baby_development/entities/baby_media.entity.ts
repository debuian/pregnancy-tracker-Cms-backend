import { Column, Entity, ManyToOne } from 'typeorm';
import { BabyDevelopmentEntity } from './baby_development.entity';
import { BaseEntity } from 'src/global/entity/baseEntity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'baby_media' })
export class BabyMediaEntity extends BaseEntity {
  @ManyToOne(() => BabyDevelopmentEntity, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  babyDevelopment: BabyDevelopmentEntity;

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
