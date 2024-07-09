// controllers/plot.controller.ts
import { response } from '../services/response.service';
import { INTERNAL_ERROR } from '../utils/constants/error.handle';
import { handleHttp } from '../utils/error.handle';
import { Request, Response } from 'express';
import { getPlots, createPlot } from '../services/plot.service';
import { IPlot } from '../interfaces/plot.interface';

const getPlotsCtrl = async (_: Request, res: Response) => {
  try {
    const plots = await getPlots();
    return response(res, plots.data);
  } catch (error) {
    console.error(error);
    handleHttp(res, INTERNAL_ERROR);
  }
};

const createPlotCtrl = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const plot: IPlot = body;
    const newPlot = await createPlot(plot);
    return response(res, newPlot.data, 'Plot created successfully', 201);
  } catch (error) {
    console.error(error);
    handleHttp(res, INTERNAL_ERROR);
  }
};

export { getPlotsCtrl, createPlotCtrl };
