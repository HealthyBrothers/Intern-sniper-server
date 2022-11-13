import User from "./User";
import Program from "./Program";
import MediaLink from "./MediaLink";

class Student extends User {
  private firstName: string;
  private lastName: string;
  private studyingYear: number;
  private interestedField: string[];
  private favoriteProgram: Program[];
  private profilePicture: string;
  private university: string;
  private mediaLink: MediaLink[];

  super(
    firstName: string,
    lastName: string,
    studyingYear: number,
    interestedField: string[],
    favoriteProgram: Program[],
    profilePicture: string,
    university: string,
    mediaLink: MediaLink[]
  ) {
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
