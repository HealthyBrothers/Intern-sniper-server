import mongoose from "mongoose";
import Student from "../types/Student";
import Company from "../types/Company";
import Director from "../types/Director";
import User from "../types/User";
import { MediaLinkSchema } from "../models/mediaLinkModel";
import { LocationSchema } from "../models/locationModel";
import { ApprovalTxSchema } from "./approvalTxModel";

export interface IUserDocument
  extends User,
    Student,
    Company,
    Director,
    mongoose.Document {}

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
  interestedField: { type: [String], required: false, default: undefined },
  favoriteProgram: {
    type: [String],
    required: false,
    default: undefined,
  },
  mediaLink: { type: [MediaLinkSchema], required: false, default: null },
  transactions: { type: [ApprovalTxSchema], required: false, default: null },
  companyName: { type: String, required: false },
  issuedProgram: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Program" }],
    default: undefined,
  },
  phoneNumber: { type: String, required: false },
  location: LocationSchema,
  validateStatus: { type: Boolean, required: false },
});

const UserModel: mongoose.Model<IUserDocument> = mongoose.model<IUserDocument>(
  "User",
  UserSchema
);

export default UserModel;
