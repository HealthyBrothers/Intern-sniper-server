import mongoose from "mongoose";
import Internship from "../classes/Internship";

interface IProgram extends Internship, mongoose.Document {}

const ProgramSchema: mongoose.Schema = new mongoose.Schema({
  programName: String,
  ownerOfProgram: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
  timeline: [{ type: mongoose.Schema.Types.ObjectId, ref: "Timeline" }],
  programPicture: [String],
  programWebsite: String,
  favoriteStudents: [
    [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
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
