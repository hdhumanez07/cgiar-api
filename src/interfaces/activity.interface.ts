import { Document, Types } from 'mongoose';

export interface IActivity extends Document {
  date: Date;
  activityType:
    | 'Planting'
    | 'Irrigation'
    | 'Fertilization'
    | 'Harvest'
    | 'Other';
  inputsUsed: string;
  duration: number;
  plot: Types.ObjectId;
}
