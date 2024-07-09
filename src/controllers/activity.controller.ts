// controllers/activity.controller.ts
import { response } from '../services/response.service';
import { INTERNAL_ERROR, ERROR_HANDLE } from '../utils/constants/error.handle';
import { handleHttp } from '../utils/error.handle';
import { Request, Response } from 'express';
import {
  getActivitiesByPlotId,
  createActivity,
} from '../services/activity.service';
import { IActivity } from '../interfaces/activity.interface';

const getActivitiesCtrl = async (req: Request, res: Response) => {
  try {
    const { plotId } = req.params;
    const activities = await getActivitiesByPlotId(plotId);

    if (activities.error) {
      return handleHttp(res, activities);
    }

    return response(res, activities.data);
  } catch (error) {
    console.error(error);
    handleHttp(res, INTERNAL_ERROR);
  }
};

const createActivityCtrl = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const activity: IActivity = body;
    const newActivity = await createActivity(activity);
    return response(
      res,
      newActivity.data,
      'Activity created successfully',
      201,
    );
  } catch (error) {
    console.error(error);
    handleHttp(res, INTERNAL_ERROR);
  }
};

export { getActivitiesCtrl, createActivityCtrl };
