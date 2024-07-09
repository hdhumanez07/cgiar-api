import { Document, Types } from 'mongoose';

export interface IPlot extends Document {
  location: {
    latitude: number;
    longitude: number;
  };
  size: number;
  currentCropType: string;
  activities: Types.ObjectId[];
}
