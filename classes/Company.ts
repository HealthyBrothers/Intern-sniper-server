import mongoose from "mongoose";
import Location from "./Location";
import User from "./User";
import Program from "./Program";
import MediaLink from "./MediaLink";

class Company extends User {
  private companyName: String;
  private issuedProgram: Program[] | null;
  private profilePicture: String;
  private phoneNumber: String;
  private mediaLink: MediaLink[] | null;
  private location: Location | null;

  constructor(
    userId: String,
    email: String,
    companyName: String,
    issuedProgram: Program[] | null,
    profilePicture: String,
    phoneNumber: String,
    mediaLink: MediaLink[] | null,
    location: Location | null,
    password: String
  ) {
    super(userId, "Company", email, password);
    this.companyName = companyName;
    this.issuedProgram = issuedProgram;
    this.profilePicture = profilePicture;
    this.phoneNumber = phoneNumber;
    this.mediaLink = mediaLink;
    this.location = location;
  }
  public static getSchema(): mongoose.Schema {
    return new mongoose.Schema({
      userId: String,
      role: String,
      email: String,
      password: String,
      companyName: String,
      issuedProgram: [{ type: mongoose.Schema.Types.ObjectId, ref: "Program" }],
      profilePicture: String,
      phoneNumber: String,
      mediaLink: [{ type: mongoose.Schema.Types.ObjectId, ref: "MediaLink" }],
      location: { type: mongoose.Schema.Types.ObjectId, ref: "Location" },
    });
  }
  public static getModel(): mongoose.Model<any> {
    return mongoose.model("Company", Company.getSchema());
  }
}

export default Company;
