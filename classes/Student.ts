import User from "./User";
import MediaLink from "./MediaLink";

class Student extends User {
  private firstName: String;
  private lastName: String;
  private studyingYear: number;
  private interestedField: String[];
  private favoriteProgram: String[] | null;
  private university: String;

  constructor(
    userId: String,
    email: String,
    firstName: String,
    lastName: String,
    studyingYear: number,
    interestedField: String[],
    favoriteProgram: String[] | null,
    university: String,
    password: String,
    mediaLink: MediaLink[] | null,
    profilePicture: String | null
  ) {
    super(userId, "Student", email, password, mediaLink, profilePicture);
    this.firstName = firstName;
    this.lastName = lastName;
    this.studyingYear = studyingYear;
    this.interestedField = interestedField;
    this.favoriteProgram = favoriteProgram;
    this.university = university;
  }
}

export default Student;
