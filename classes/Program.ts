import Company from "./Company";
import Timeline from "./Timeline";
import { programType } from "./enum";

abstract class Program {
  programId: String;
  programName: String;
  ownerOfProgram: Company;
  timeline: Timeline[];
  programPicture: String[];
  programWebsite: String;
  favoriteStudents: String[] | null;
  relatedField: String[];
  programType: programType;

  constructor(
    programId: String,
    programName: String,
    ownerOfProgram: Company,
    timeline: Timeline[],
    programPicture: String[],
    programWebsite: String,
    favoriteStudents: String[] | null,
    relatedField: String[],
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

  public announceProgram() {
    console.log(
      `This program is ${this.programName}, it is ${this.programType} and its id is ${this.programId}`
    );
  }
}

export default Program;
