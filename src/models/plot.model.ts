import { Schema, model } from 'mongoose';
import { IPlot } from '../interfaces/plot.interface';

const plotSchema = new Schema({
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  size: { type: Number, required: true },
  currentCropType: { type: String, required: true },
  activities: [{ type: Schema.Types.ObjectId, ref: 'Activity' }],
});

const Plot = model('Plot', plotSchema);

export default Plot;
