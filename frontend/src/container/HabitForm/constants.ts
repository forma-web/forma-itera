import { TField } from '@/types/form';
import { THabitValues } from '@/types/habit';
import { Path, RegisterOptions } from 'react-hook-form';

export const habitsOptions: Partial<
  Record<keyof THabitValues, RegisterOptions<THabitValues, Path<THabitValues>>>
> = {
  name: {
    required: 'Это поле должно быть заполнено',
    maxLength: {
      value: 255,
      message: 'Название должно быть меньше 255 стмаолов',
    },
  },
  description: {
    maxLength: {
      value: 255,
      message: 'Описание должно быть меньше 255 стмаолов',
    },
  },
};

export const DEFAULT_HABIT_FORM: Partial<THabitValues> = {
  days: [0, 1, 2, 3, 4, 5, 6],
  totalSteps: 1,
};
