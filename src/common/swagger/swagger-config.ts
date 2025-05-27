// src/common/swagger/swagger-config.ts
import { TrimesterEntity } from '../../trimesters/entities/trimester.entity';
import { TrimesterExamples } from '../../trimesters/dto/trimester.examples';

export const SwaggerConfig = {
  trimester: {
    CREATE: {
      description: 'The trimester has been successfully created.',
      type: 'TrimesterResponse',
      example: TrimesterExamples.CREATED,
    },
    FIND_ALL: {
      description: 'Returns a list of all trimesters.',
      type: 'TrimesterArrayResponse',
      example: TrimesterExamples.ARRAY,
    },
    FIND_ONE: {
      description: 'Returns a single trimester by ID.',
      type: 'TrimesterResponse',
      example: TrimesterExamples.DEFAULT,
    },
    UPDATE: {
      description: 'The trimester has been successfully updated.',
      type: 'TrimesterResponse',
      example: TrimesterExamples.UPDATED,
    },
    DELETE: {
      description: 'The trimester has been successfully deleted.',
      type: 'TrimesterResponse',
      example: TrimesterExamples.DEFAULT,
    },
  },
};
