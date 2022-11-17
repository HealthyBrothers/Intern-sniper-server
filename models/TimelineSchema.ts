import mongoose from "mongoose";
import Timeline from "../classes/Timeline";

interface ITimeLine extends Timeline, mongoose.Document {}

export const TimelineSchema: mongoose.Schema = new mongoose.Schema({
  eventName: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  status: { type: String, required: true },
});
