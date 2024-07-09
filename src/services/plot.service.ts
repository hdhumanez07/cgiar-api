// business/plot.business.ts
import Plot from '../models/plot.model';
import { IPlot } from '../interfaces/plot.interface';
import { ERROR_HANDLE } from '../utils/constants/error.handle';
import { validatePlot } from '../schemas/plot.schema';

const { INVALID_PAYLOAD } = ERROR_HANDLE;

const getPlots = async () => {
  const plots = await Plot.find().populate('activities');
  if (!plots) {
    return {
      error: ERROR_HANDLE.NOT_FOUND.KEY,
      data: ERROR_HANDLE.NOT_FOUND.MESSAGE,
    };
  }
  return { data: plots };
};

const createPlot = async (data: IPlot) => {
  const validatePayload = validatePlot(data);
  if (!validatePayload.success) {
    return {
      error: INVALID_PAYLOAD.KEY,
      data: validatePayload.error,
    };
  }
  const plot = new Plot(data);
  await plot.save();
  return { data: plot };
};

export { getPlots, createPlot };
