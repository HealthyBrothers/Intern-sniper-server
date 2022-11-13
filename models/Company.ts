import Location from "./Location";
import User from "./User";
import Program from "./Program";
import { MediaType } from "express";
class Company extends User {
  private companyName: String;
  private issuedProgram: Program[];
  private profilePicture: String;
  private phoneNumber: String;
  private mediaLink: MediaType[];
  private location: Location;

  super(
    companyName: String,
    issuedProgram: Program[],
    profilePicture: String,
    phoneNumber: String,
    mediaLink: MediaType[],
    location: Location
  ) {
    this.companyName = companyName;
    this.issuedProgram = issuedProgram;
    this.profilePicture = profilePicture;
    this.phoneNumber = phoneNumber;
    this.mediaLink = mediaLink;
    this.location = location;
  }
}

export default Company;
