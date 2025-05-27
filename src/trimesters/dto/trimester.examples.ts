import { TrimesterEntity } from '../entities/trimester.entity';

export const TrimesterExamples = {
  CREATED: {
    status: 'success',
    data: {
      id: 1,
      name: 'First Trimester',
      abbreviation: '1',
      description:
        'The first trimester of pregnancy lasts from week 1 to week 12.',
    } as TrimesterEntity,
  },
  UPDATED: {
    status: 'success',
    data: {
      id: 1,
      name: 'Updated First Trimester',
      abbreviation: 'UT1',
      description: 'Updated description covering weeks 1-12',
    } as TrimesterEntity,
  },

  DEFAULT: {
    status: 'success',
    data: {
      id: 1,
      name: 'First Trimester',
      abbreviation: 'T1',
      description: 'Covers week 1 to 12 of pregnancy',
    } as TrimesterEntity,
  },

  ARRAY: {
    status: 'success',
    data: [
      {
        id: 1,
        name: 'First Trimester',
        abbreviation: 'T1',
        description: 'Covers week 1 to 12 of pregnancy',
      } as TrimesterEntity,
      {
        id: 2,
        name: 'Second Trimester',
        abbreviation: 'T2',
        description: 'Covers week 13 to 26 of pregnancy',
      } as TrimesterEntity,
      {
        id: 3,
        name: 'Third Trimester',
        abbreviation: 'T3',
        description: 'Covers week 27 to birth of pregnancy',
      } as TrimesterEntity,
    ],
  },
};
