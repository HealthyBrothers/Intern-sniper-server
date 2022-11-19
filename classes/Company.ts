import Location from "./Location";
import User from "./User";
import ApprovalTx from "./ApprovalTx";
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
    salt: String | null,
    validateStatus: boolean
  ) {
    super("Company", email, password, salt, mediaLink, profilePicture);
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

  public getName(): String {
    return this.companyName.toString();
  }

  public updateCompanyProfile(
    companyName: String,
    profilePicture: String | null,
    phoneNumber: String,
    mediaLink: MediaLink[] | null,
    location: Location | null
  ) {
    this.companyName = companyName;
    this.profilePicture = profilePicture;
    this.phoneNumber = phoneNumber;
    this.mediaLink = mediaLink;
    this.location = location;
  }

  public addProgram(newProgramId: String) {
    if (this.issuedProgram == null) {
      this.issuedProgram = [];
    }

    this.issuedProgram.push(newProgramId);
  }
}

export default Company;
