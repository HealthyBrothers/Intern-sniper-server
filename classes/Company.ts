import Location from "./Location";
import User from "./User";
import MediaLink from "./MediaLink";

class Company extends User {
  companyName: String;
  issuedProgram: String[] | null;
  phoneNumber: String;
  location: Location | null;
  validateStatus: boolean;

  constructor(
    email: String,
    companyName: String,
    issuedProgram: String[] | null,
    profilePicture: String | null,
    phoneNumber: String,
    mediaLink: MediaLink[] | null,
    location: Location | null,
    password: String,
    validateStatus: boolean
  ) {
    super("Company", email, password, mediaLink, profilePicture);
    this.companyName = companyName;
    this.issuedProgram = issuedProgram;
    this.profilePicture = profilePicture;
    this.phoneNumber = phoneNumber;
    this.location = location;
    this.validateStatus = validateStatus;
  }

  public setValidateStatus(status: boolean) {
    this.validateStatus = status;
  }

  public getName(): string {
    return this.companyName.toString();
  }

  public updateCompanyProfile(
    companyName: String,
    profilePicture: String | null,
    phoneNumber: String,
    mediaLink: MediaLink[] | null
  ) {
    this.companyName = companyName;
    this.profilePicture = profilePicture;
    this.phoneNumber = phoneNumber;
    this.mediaLink = mediaLink;
  }
}

export default Company;
