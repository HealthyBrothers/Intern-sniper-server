import Location from "./Location";
import User from "./User";
import MediaLink from "./MediaLink";

class Company extends User {
  companyName: String;
  issuedProgram: String[] | null;
  phoneNumber: String;
  location: Location | null;

  constructor(
    userId: String,
    email: String,
    companyName: String,
    issuedProgram: String[] | null,
    profilePicture: String | null,
    phoneNumber: String,
    mediaLink: MediaLink[] | null,
    location: Location | null,
    password: String
  ) {
    super(userId, "Company", email, password, mediaLink, profilePicture);
    this.companyName = companyName;
    this.issuedProgram = issuedProgram;
    this.profilePicture = profilePicture;
    this.phoneNumber = phoneNumber;
    this.location = location;
  }
}

export default Company;
