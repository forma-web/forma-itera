import { faker } from '@faker-js/faker/locale/ru';
import { THabit } from './habits';

export type THistoryRecord = {
  id: number;
  date: Date;
  habitId: number;
  completedSteps: number;
  totalSteps: number;
};

const createHistoryHabit = (
  id: number,
  habit: THabit,
  date: Date
): THistoryRecord => {
  const { id: habitId, totalSteps } = habit;

  return {
    id,
    date: new Date(date),
    habitId,
    completedSteps: faker.datatype.number({ min: 0, max: totalSteps }),
    totalSteps,
  };
};

const createHistory = (habits: THabit[]): THistoryRecord[] => {
  const history: THistoryRecord[] = [];

  for (const habit of habits) {
    const { days, createdAt } = habit;

    const startDate = new Date(createdAt);
    const today = new Date();

    for (
      let date = startDate;
      date <= today;
      date.setDate(date.getDate() + 1)
    ) {
      if (days.includes(date.getDay())) {
        history.push(createHistoryHabit(history.length + 1, habit, date));
      }
    }
  }

  return history;
};

export default createHistory;
