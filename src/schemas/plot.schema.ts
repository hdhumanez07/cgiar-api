import { z } from 'zod';
import { IPlot } from '../interfaces/plot.interface';

const plotSchema = z.object({
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
  size: z.number().min(1).max(1000), // Ejemplo de validación de tamaño entre 1 y 1000
  currentCropType: z.string().min(1).max(50),
  activities: z.array(z.string()), // Ejemplo de validación de array de IDs
});

const validatePlot = (data: IPlot) => {
  return plotSchema.safeParse(data);
};

export { validatePlot };
