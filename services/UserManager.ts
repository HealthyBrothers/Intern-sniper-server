import UserModel, { IUserDocument } from "../models/userModel";
import Company from "../classes/Company";
import Director from "../classes/Director";
import Student from "../classes/Student";
import User from "../classes/User";

export class UserManager {
  private parseUser(documentUser: IUserDocument | null): User | null {
    if (documentUser === null) return null

    const { id, role, email, password, salt, firstName,
      lastName, studyingYear, profilePicture,
      university, interestedField, favoriteProgram,
      mediaLink, transactions, companyName, issuedProgram,
      phoneNumber, location, validateStatus } = documentUser

    switch (role) {
      case 'Student': {
        const student = new Student(email, firstName, lastName,
          studyingYear, interestedField, null,
          university, password, salt, null, profilePicture)
        return student
      }
      case 'Company': {
        const company = new Company(email, companyName,
          null, profilePicture, phoneNumber,
          null, null, password, salt, validateStatus)
        return company
      }
      case 'Director': {
        const director = new Director(email, firstName,
          lastName, null, password,
          salt, null, profilePicture)
        return director
      }
      default: {
        return null
      }
    }
  }

  public create(user: User): Promise<IUserDocument> {
    return UserModel.create(user)
  }

  public async getUserByEmail(email: string): Promise<User | null> {
    const user = await UserModel.findOne({ email })
    return this.parseUser(user)
  }

}