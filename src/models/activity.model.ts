import { Schema, model } from 'mongoose';

const activitySchema = new Schema({
  date: { type: Date, required: true },
  activityType: {
    type: String,
    enum: ['Planting', 'Irrigation', 'Fertilization', 'Harvest', 'Other'],
    required: true,
  },
  inputsUsed: { type: String, required: true },
  duration: { type: Number, required: true },
  plot: { type: Schema.Types.ObjectId, ref: 'Plot', required: true },
});

const Activity = model('Activity', activitySchema);

export default Activity;
