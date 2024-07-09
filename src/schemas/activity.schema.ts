import { z } from 'zod';
import { Types } from 'mongoose';

const activitySchema = z.object({
  date: z.date(),
  activityType: z.enum([
    'Planting',
    'Irrigation',
    'Fertilization',
    'Harvest',
    'Other',
  ]),
  inputsUsed: z.string(),
  duration: z.number().min(1),
  plot: z.string().refine((value) => Types.ObjectId.isValid(value)),
});

const validateActivity = (data: any) => {
  return activitySchema.safeParse(data);
};

export { validateActivity };
