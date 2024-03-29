import {date, InferType, number, object} from 'yup';

export const historyRequestQuery = object({
  startDate: date().transform(parseDateString),
  endDate: date().transform(parseDateString),
}).noUnknown(true);;

export const updateHistoryRequest = object({
  completedSteps: number().integer().min(0).required(),
}).noUnknown(true);;
export type UpdateHistoryRequestType = InferType<typeof updateHistoryRequest>;
