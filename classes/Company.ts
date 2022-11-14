import mongoose from "mongoose";
import Location from "./Location";
import User from "./User";
import Program from "./Program";
import { MediaType } from "express";

class Company extends User {
  private companyName: String;
  private issuedProgram: Program[];
  private profilePicture: String;
  private phoneNumber: String;
  private mediaLink: MediaType[];
  private location: Location;

  super(
    companyName: String,
    issuedProgram: Program[],
    profilePicture: String,
    phoneNumber: String,
    mediaLink: MediaType[],
    location: Location
  ) {
    this.companyName = companyName;
    this.issuedProgram = issuedProgram;
    this.profilePicture = profilePicture;
    this.phoneNumber = phoneNumber;
    this.mediaLink = mediaLink;
    this.location = location;
  }
  public static getSchema() {
    return new mongoose.Schema({
      companyName: String,
      issuedProgram: [{ type: mongoose.Schema.Types.ObjectId, ref: "Program" }],
      profilePicture: String,
      phoneNumber: String,
      mediaLink: [{ type: mongoose.Schema.Types.ObjectId, ref: "MediaLink" }],
      location: Location,
    });
  }

  public static getModel(): mongoose.Model<any> {
    return mongoose.model("Company", this.getSchema());
  }
}

export default Company;
