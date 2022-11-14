import mongoose from "mongoose";
import Program from "./Program";
import Company from "./Company";
import Timeline from "./Timeline";
import Student from "./Student";
import { programType } from "./enum";

class Internship extends Program {
  private paid: boolean;
  super(
    programId: String,
    programName: String,
    ownerOfProgram: Company,
    timeline: Timeline[],
    programPicture: string[],
    programWebsite: string,
    favoriteStudents: Student[],
    relatedField: string[],
    programType: programType,
    paid: boolean
  ) {
    this.programId = programId;
    this.programName = programName;
    this.ownerOfProgram = ownerOfProgram;
    this.timeline = timeline;
    this.programPicture = programPicture;
    this.programWebsite = programWebsite;
    this.favoriteStudents = favoriteStudents;
    this.relatedField = relatedField;
    this.programType = programType;
    this.paid = paid;
  }

  public override announceProgram() {
    console.log(
      `This program is ${this.programName}, it is ${
        this.programType
      }, its id is ${this.programId}, and it is ${
        this.paid ? "paid" : "unpaid"
      } program`
    );
  }

  public static getSchema() {
    return new mongoose.Schema({
      programId: String,
      programName: String,
      ownerOfProgram: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
      timeline: [{ type: mongoose.Schema.Types.ObjectId, ref: "Timeline" }],
      programPicture: String,
      programWebsite: String,
      favoriteStudents: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
      ],
      relatedField: String,
      programType: String,
    });
  }

  public static getModel(): mongoose.Model<any> {
    return mongoose.model("Internship", this.getSchema());
  }
}

export default Internship;
