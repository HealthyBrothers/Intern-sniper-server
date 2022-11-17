import mongoose from "mongoose";
import { LocationSchema } from "./LocationModel";
import { MediaLinkSchema } from "./MediaLinkModel";

export const CompanySchema: mongoose.Schema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  companyName: { type: String, required: true },
  issuedProgram: { type: mongoose.Schema.Types.ObjectId, ref: "Program" },
  phoneNumber: { type: String, required: true },
  mediaLink: { type: [MediaLinkSchema], require: false },
  location: { type: LocationSchema, required: false },
  password: { type: String, required: true },
});
