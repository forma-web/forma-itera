import getHeaders from '@/utils/getHeaders';
import {
  TCompletedSteps,
  TCompletedStepsRequest,
  TTodayHabitResponse,
} from '@/types/history';
import responseHandle from '@/utils/responseHandle';

const baseUrl = `${process.env.apiPath}/history`;

export const todayHabitFetch = async (): Promise<TTodayHabitResponse> => {
  const response = await fetch(baseUrl, {
    method: 'GET',
    headers: getHeaders(),
  });

  return responseHandle(response);
};

export const updateCompletedStepsFetch = async ({
  id,
  completedSteps,
}: TCompletedStepsRequest): Promise<{
  data: TCompletedSteps;
}> => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'PATCH',
    headers: getHeaders(),
    body: JSON.stringify({ completedSteps }),
  });

  return responseHandle(response);
};
