// business/activity.business.ts
import Activity from '../models/activity.model';
import { IActivity } from '../interfaces/activity.interface';
import { ERROR_HANDLE } from '../utils/constants/error.handle';
import { validateActivity } from '../schemas/activity.schema';

const { INVALID_PAYLOAD } = ERROR_HANDLE;

const getActivitiesByPlotId = async (plotId: string) => {
  const activities = await Activity.find({ plot: plotId }).populate('plot');
  if (!activities) {
    return {
      error: ERROR_HANDLE.NOT_FOUND.KEY,
      data: ERROR_HANDLE.NOT_FOUND.MESSAGE,
    };
  }
  return { data: activities };
};

const createActivity = async (data: IActivity) => {
  const validatePayload = validateActivity(data);
  if (!validatePayload.success) {
    return {
      error: INVALID_PAYLOAD.KEY,
      data: validatePayload.error,
    };
  }
  const activity = new Activity(data);
  await activity.save();
  return { data: activity };
};

export { getActivitiesByPlotId, createActivity };
