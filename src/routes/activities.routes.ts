// routes/activity.routes.ts
import { Router } from 'express';
import { checkJwt } from '../middlewares/session';
import {
  createActivityCtrl,
  getActivitiesCtrl,
} from '../controllers/activity.controller';

const router = Router();

router.get('/:plotId', checkJwt, getActivitiesCtrl); // Obtener actividades por ID de la parcela
router.post('/', checkJwt, createActivityCtrl); // Crear una nueva actividad

export { router };
