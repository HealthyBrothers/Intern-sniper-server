import Company from "./Company";
import Timeline from "./Timeline";
import { programType } from "./enum";

abstract class Program {
  programName: String;
  ownerOfProgram: Company;
  timeline: Timeline[];
  programPicture: String[];
  programWebsite: String;
  favoriteStudents: String[] | null;
  relatedField: String[];
  programType: programType;

  constructor(
    programName: String,
    ownerOfProgram: Company,
    timeline: Timeline[],
    programPicture: String[],
    programWebsite: String,
    favoriteStudents: String[] | null,
    relatedField: String[],
    programType: programType
  ) {
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
      `This program is ${this.programName}, it is ${this.programType}`
    );
  }
}

export default Program;
