import mongoose from "mongoose";

const ProgramSchema: mongoose.Schema = new mongoose.Schema({
  programId: String,
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

const ProgramModel = mongoose.model("Program", ProgramSchema);

export default ProgramModel;
