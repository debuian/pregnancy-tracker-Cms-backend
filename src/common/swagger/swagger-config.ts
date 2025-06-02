// src/common/swagger/swagger-config.ts
import { TrimesterEntity } from '../../trimesters/entities/trimester.entity';
import { TrimesterExamples } from '../../trimesters/dto/trimester.examples';
import { create } from 'domain';

export const SwaggerExampleConfig = {
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
  week: {
    create: {
      weekNumber: 1,
      title: 'Week 1',
      summary: 'This is a summary of week 1.',
      trimesterId: 1,
    },
    update: {
      weekNumber: 2,
      title: 'Week 2 - Updated',
      summary: 'This is an updated summary for week 2.',
      trimesterId: 1,
    },
  },
};
