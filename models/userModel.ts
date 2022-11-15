import mongoose from "mongoose";
import Student from "../classes/Student";
import Company from "../classes/Company";
import Director from "../classes/Director";

interface IUser extends Director, Student, Company, mongoose.Document {}

const UserSchema: mongoose.Schema = new mongoose.Schema({
  role: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  studyingYear: { type: String, required: false },
  profilePicture: { type: String, required: false },
  university: { type: String, required: false },
  interestedField: { type: [String], required: false },
  favoriteProgram: {
    type: [String],
    required: false,
  },
  mediaLink: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "MediaLink" }],
    required: false,
  },
  transactions: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "ApprovalTx" }],
    required: false,
  },
  companyName: { type: String, required: false },
  issuedProgram: [{ type: mongoose.Schema.Types.ObjectId, ref: "Program" }],
  phoneNumber: { type: String, required: false },
  location: [
    {
      type: { type: mongoose.Schema.Types.ObjectId, ref: "Location" },
      required: false,
    },
  ],
});

const UserModel: mongoose.Model<IUser> = mongoose.model<IUser>(
  "User",
  UserSchema
);

export default UserModel;
