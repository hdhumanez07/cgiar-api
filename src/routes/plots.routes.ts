// routes/plot.routes.ts
import { Router } from 'express';
import { checkJwt } from '../middlewares/session';
import { createPlotCtrl, getPlotsCtrl } from '../controllers/plot.controller';

const router = Router();

router.get('/', checkJwt, getPlotsCtrl);
router.post('/', checkJwt, createPlotCtrl);

export { router };
