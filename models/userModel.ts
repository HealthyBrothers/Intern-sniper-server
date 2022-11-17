import mongoose from "mongoose";
import Student from "../classes/Student";
import Company from "../classes/Company";
import Director from "../classes/Director";
import User from "../classes/User";
import { MediaLinkSchema } from '../models/mediaLinkModel'
import { LocationSchema } from '../models/locationModel'

export interface IUserDocument extends User, Student, Company, Director, mongoose.Document {}

const UserSchema: mongoose.Schema<IUserDocument> = new mongoose.Schema({
  role: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  salt: { type: String, require: true },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  studyingYear: { type: Number, required: false },
  profilePicture: { type: String, required: false },
  university: { type: String, required: false },
  interestedField: { type: [String], required: false },
  favoriteProgram: {
    type: [String],
    required: false,
  },
  mediaLink: [MediaLinkSchema],
  transactions: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "ApprovalTx" }],
    required: false,
  },
  companyName: { type: String, required: false },
  issuedProgram: [{ type: mongoose.Schema.Types.ObjectId, ref: "Program" }],
  phoneNumber: { type: String, required: false },
  location: LocationSchema,
  validateStatus: { type: Boolean, default: false }
});

const UserModel: mongoose.Model<IUserDocument> = mongoose.model<IUserDocument>(
  "User",
  UserSchema
);

export default UserModel;
