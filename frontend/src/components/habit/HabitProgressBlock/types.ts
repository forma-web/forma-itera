import { THistoryHabit } from '@/types/habit';

export type TProgressData = Record<string, TProgressRecord>;

export type TProgressRecord = {
  totalSteps: number;
  completedSteps: number;
  isComingHabit: boolean;
};

export type THabitProgressProps = {
  history: THistoryHabit[];
  totalSteps: number;
  days: number[];
};

export type TColor = [number, number, number];
