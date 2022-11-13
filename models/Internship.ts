import Program from "./Program";
import Company from "./Company";
import Timeline from "./Timeline";
import Student from "./Student";
import { programType } from "./enum";

class Internship extends Program {
  super(
    programId: String,
    programName: String,
    ownerOfProgram: Company,
    timeline: Timeline[],
    programPicture: string[],
    programWebsite: string,
    favoriteStudents: Student[],
    relatedField: string[],
    programType: programType
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
  }
}

export default Internship;
