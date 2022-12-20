import mongoose from 'mongoose';

export const TimelineSchema: mongoose.Schema = new mongoose.Schema({
  eventName: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  status: { type: String, required: true },
});
