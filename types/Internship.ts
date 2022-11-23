import Program from "./Program";
import Company from "./Company";
import Timeline from "./Timeline";
import { programType } from "./enum";

class Internship extends Program {
  paid: boolean;

  constructor(
    programId: String | null,
    programName: String,
    ownerOfProgram: Company,
    timeline: Timeline[],
    programPicture: String[],
    programWebsite: String,
    favoriteStudents: String[] | null,
    relatedField: String[],
    programType: String,
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
      } and it is ${
        this.paid ? "paid" : "unpaid"
      } intern`
    );
  }
}

export default Internship;
