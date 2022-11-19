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

  public getName(): String {
    return this.firstName.toString() + " " + this.lastName.toString();
  }

  public updateStudentProfile(
    firstName: String,
    lastName: String,
    studyingYear: number,
    interestedField: String[],
    university: String,
    profilePicture: String | null,
    mediaLink: MediaLink[] | null
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.studyingYear = studyingYear;
    this.interestedField = interestedField;
    this.university = university;
    this.profilePicture = profilePicture;
    this.mediaLink = mediaLink;
  }

  public addFavoriteProgram(program: Program) {
    if(program.programId !== null) { 
      if(this.favoriteProgram?.includes(program.programId)) return

      this.favoriteProgram?.push(program.programId)
    }
  }
}

export default Student;
