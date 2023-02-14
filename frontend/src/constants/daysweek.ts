import { TDaysOfWeek } from '@/types/daysweek';

type TDaysOfWeekData = {
  value: TDaysOfWeek;
  label: string;
};

export const DAYS_OF_WEEK: TDaysOfWeekData[] = [
  {
    value: 1,
    label: 'пн',
  },
  {
    value: 2,
    label: 'вт',
  },
  {
    value: 3,
    label: 'ср',
  },
  {
    value: 4,
    label: 'чт',
  },
  {
    value: 5,
    label: 'пт',
  },
  {
    value: 6,
    label: 'сб',
  },
  {
    value: 0,
    label: 'вс',
  },
];
