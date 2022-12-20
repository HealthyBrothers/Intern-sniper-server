import Company from './Company';
import Timeline from './Timeline';
import Student from './Student';

abstract class Program {
  programId: String | null;
  programName: String;
  ownerOfProgram: Company;
  timeline: Timeline[];
  programPicture: String[];
  programWebsite: String;
  favoriteStudents: String[] | null;
  relatedField: String[];
  programType: String;

  constructor(
    programId: String | null,
    programName: String,
    ownerOfProgram: Company,
    timeline: Timeline[],
    programPicture: String[],
    programWebsite: String,
    favoriteStudents: String[] | null,
    relatedField: String[],
    programType: String
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

  public announceProgram(): void {
    console.log(
      `This program is ${this.programName}, it is ${this.programType}`
    );
  }

  public addFavoriteStudent(student: Student): void {
    if (student.userId !== null) {
      if (this.favoriteStudents?.includes(student.userId)) return;

      this.favoriteStudents?.push(student.userId);
    }
  }

  public removeFavoriteStudent(student: Student): void {
    if (student.userId !== null) {
      if (this.favoriteStudents?.includes(student.userId)) {
        this.favoriteStudents = this.favoriteStudents.filter((e) => {
          return e != student.userId?.toString();
        });
      }
      console.log(this.favoriteStudents, student.userId);
    }
  }
}

export default Program;
