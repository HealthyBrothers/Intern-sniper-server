import mongoose from "mongoose";
import Program from "./Program";
import Company from "./Company";
import Timeline from "./Timeline";
import Student from "./Student";
import { programType } from "./enum";

class Internship extends Program {
  private paid: boolean;

  constructor(
    programId: String,
    programName: String,
    ownerOfProgram: Company,
    timeline: Timeline[],
    programPicture: string[],
    programWebsite: string,
    favoriteStudents: Student[] | null,
    relatedField: string[],
    programType: programType,
    paid: boolean
  ) {
    super(
      programId,
      programName,
      ownerOfProgram,
      timeline,
      programPicture,
      programWebsite,
      favoriteStudents,
      relatedField,
      programType
    );
    this.paid = paid;
  }

  public override announceProgram() {
    console.log(
      `This program is ${this.programName}, it is ${
        this.programType
      }, its id is ${this.programId}, and it is ${
        this.paid ? "paid" : "unpaid"
      } intern`
    );
  }
}

export default Internship;
