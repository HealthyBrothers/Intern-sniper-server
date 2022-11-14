import mongoose from "mongoose";
import User from "./User";
import Program from "./Program";
import MediaLink from "./MediaLink";

class Student extends User {
  private firstName: string;
  private lastName: string;
  private studyingYear: number;
  private interestedField: string[];
  private favoriteProgram: Program[];
  private profilePicture: string;
  private university: string;
  private mediaLink: MediaLink[];

  super(
    firstName: string,
    lastName: string,
    studyingYear: number,
    interestedField: string[],
    favoriteProgram: Program[],
    profilePicture: string,
    university: string,
    mediaLink: MediaLink[]
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.studyingYear = studyingYear;
    this.interestedField = interestedField;
    this.favoriteProgram = favoriteProgram;
    this.profilePicture = profilePicture;
    this.university = university;
    this.mediaLink = mediaLink;
  }
  public static getSchema() {
    return new mongoose.Schema({
      firstName: String,
      lastName: String,
      studyingYear: Number,
      interestedField: String,
      favoriteProgram: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Program" },
      ],
      profilePicture: String,
      university: String,
      mediaLink: [{ type: mongoose.Schema.Types.ObjectId, ref: "MediaLink" }],
    });
  }

  public static getModel(): mongoose.Model<any> {
    return mongoose.model("Student", this.getSchema());
  }
}

export default Student;
