import mongoose from "mongoose";
import Student from "../classes/Student";
import Company from "../classes/Company";
import Director from "../classes/Director";
import crypto from "crypto";
import User from "../classes/User";
import { MediaLinkSchema } from "../models/MediaLinkModel";
import { LocationSchema } from "../models/LocationModel";

export interface IUserDocument
  extends User,
    Student,
    Company,
    Director,
    mongoose.Document {
  setPassword: (password: string) => void;
  validatePassword: (pasdword: string) => boolean;
}

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
});

UserSchema.methods.setPassword = function (password: string): void {
  this.salt = crypto.randomBytes(16).toString("hex");

  this.password = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex");
};

UserSchema.methods.validatePassword = function (password: string): boolean {
  const hash_password = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex");
  return this.password === hash_password;
};

const UserModel: mongoose.Model<IUserDocument> = mongoose.model<IUserDocument>(
  "User",
  UserSchema
);

export default UserModel;
