import User from "./User";
import Program from "./Program";
import MediaLink from "./MediaLink";

class Student extends User {
  private firstName: string;
  private lastName: string;
  private studyingYear: number;
  private interestedField: string[];
  private favoriteProgram: Program[] | null;
  private profilePicture: string;
  private university: string;
  private mediaLink: MediaLink[] | null;

  constructor(
    userId: String,
    email: String,
    firstName: string,
    lastName: string,
    studyingYear: number,
    interestedField: string[],
    favoriteProgram: Program[] | null,
    profilePicture: string,
    university: string,
    mediaLink: MediaLink[] | null,
    password: string
  ) {
    super(userId, "Student", email, password);
    this.firstName = firstName;
    this.lastName = lastName;
    this.studyingYear = studyingYear;
    this.interestedField = interestedField;
    this.favoriteProgram = favoriteProgram;
    this.profilePicture = profilePicture;
    this.university = university;
    this.mediaLink = mediaLink;
  }
}

export default Student;
