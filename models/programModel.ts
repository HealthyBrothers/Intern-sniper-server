import mongoose from "mongoose";
import Internship from "../classes/Internship";
import { TimelineSchema } from "./timelineSchema";
import { CompanySchema } from "./companySchema";

export interface IProgram extends Internship, mongoose.Document {}

export const ProgramSchema: mongoose.Schema = new mongoose.Schema({
  programName: String,
  ownerOfProgram: { type: [CompanySchema], required: true },
  timeline: { type: [TimelineSchema], required: true },
  programPicture: [String],
  programWebsite: String,
  favoriteStudents: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  ],
  relatedField: [String],
  programType: String,
  paid: Boolean,
});

const ProgramModel: mongoose.Model<IProgram> = mongoose.model<IProgram>(
  "Program",
  ProgramSchema
);

export default ProgramModel;
