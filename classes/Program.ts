import Company from "./Company";
import Timeline from "./Timeline";
import { programType } from "./enum";
import Student from "./Student";

abstract class Program {
  programId: String | null;
  programName: String;
  ownerOfProgram: Company;
  timeline: Timeline[];
  programPicture: String[];
  programWebsite: String;
  favoriteStudents: String[] | null;
  relatedField: String[];
  programType: programType;

  constructor(
    programId: String | null,
    programName: String,
    ownerOfProgram: Company,
    timeline: Timeline[],
    programPicture: String[],
    programWebsite: String,
    favoriteStudents: String[] | null,
    relatedField: String[],
    programType: programType
  ) {
    programId = this.programId;
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

  public addFavoriteStudent(student: Student) {
    if(student.userId !== null) this.favoriteStudents?.push(student.userId)
  }
}

export default Program;
