import User from "./User";
import MediaLink from "./MediaLink";
import Program from "./Program";

class Student extends User {
  firstName: String;
  lastName: String;
  studyingYear: number;
  interestedField: String[];
  favoriteProgram: String[] | null;
  university: String;

  constructor(
    userId: String | null,
    email: String,
    firstName: String,
    lastName: String,
    studyingYear: number,
    interestedField: String[],
    favoriteProgram: String[] | null,
    university: String,
    password: String,
    salt: String | null,
    mediaLink: MediaLink[] | null,
    profilePicture: String | null
  ) {
    super(userId, "Student", email, password, salt, mediaLink, profilePicture);
    this.firstName = firstName;
    this.lastName = lastName;
    this.studyingYear = studyingYear;
    this.interestedField = interestedField;
    this.favoriteProgram = favoriteProgram;
    this.university = university;
  }

  public getName(): string {
    return this.firstName.toString() + " " + this.lastName.toString();
  }

  public updateStudentProfile(
    firstName: String,
    lastName: String,
    studyingYear: number,
    interestedField: String[],
    university: String,
    mediaLink: MediaLink[] | null,
    profilePicture: String | null
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.studyingYear = studyingYear;
    this.interestedField = interestedField;
    this.university = university;
    this.mediaLink = mediaLink;
    this.profilePicture = profilePicture;
  }

  public addFavoriteProgram(program: Program) {
    if(program.programId !== null) this.favoriteProgram?.push(program.programId)
  }
}

export default Student;
