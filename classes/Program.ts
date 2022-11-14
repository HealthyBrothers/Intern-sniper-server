import Company from "./Company";
import Timeline from "./Timeline";
import Student from "./Student";
import { programType } from "./enum";

abstract class Program {
  protected programId: String;
  protected programName: String;
  protected ownerOfProgram: Company;
  protected timeline: Timeline[];
  protected programPicture: string[];
  protected programWebsite: string;
  protected favoriteStudents: Student[] | null;
  protected relatedField: string[];
  protected programType: programType;

  constructor(
    programId: String,
    programName: String,
    ownerOfProgram: Company,
    timeline: Timeline[],
    programPicture: string[],
    programWebsite: string,
    favoriteStudents: Student[] | null,
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

  public announceProgram() {
    console.log(
      `This program is ${this.programName}, it is ${this.programType} and its id is ${this.programId}`
    );
  }
}

export default Program;
