import UserModel, { IUserDocument } from "../models/userModel";
import Company from "../classes/Company";
import Director from "../classes/Director";
import Student from "../classes/Student";
import User from "../classes/User";

export class UserManager {
  private parseUser(documentUser: IUserDocument | null): User | null {
    if (documentUser === null) return null

    const { _id, role, email, password, salt, firstName,
      lastName, studyingYear, profilePicture,
      university, interestedField, favoriteProgram,
      mediaLink, transactions, companyName, issuedProgram,
      phoneNumber, location, validateStatus } = documentUser

    switch (role) {
      case 'Student': {
        const student = new Student(_id.toString(), email, firstName, lastName,
          studyingYear, interestedField, null,
          university, password, salt, null, profilePicture)
        return student
      }
      case 'Company': {
        const company = new Company(_id.toString(), email, companyName,
          null, profilePicture, phoneNumber,
          null, null, password, salt, validateStatus)
        return company
      }
      case 'Director': {
        const director = new Director(_id.toString(), email, firstName,
          lastName, null, password,
          salt, null, profilePicture)
        return director
      }
      default: {
        return null
      }
    }
  }

  private async parseUserDocument(user: User): Promise<IUserDocument | null> {
    let documentUser: IUserDocument | null = await UserModel.findById(user.userId)

    if(documentUser === null) return null

    const { role } = documentUser

    switch (role) {
      case 'Student': {
        const student = user as Student
        documentUser.firstName = student.firstName
        documentUser.lastName = student.lastName
        documentUser.studyingYear = student.studyingYear
        documentUser.interestedField = student.interestedField
        documentUser.university = student.university
        documentUser.mediaLink = student.mediaLink
        documentUser.profilePicture = student.profilePicture
        return documentUser
      }
      case 'Company': {
        const company = user as Company
        documentUser.companyName = company.companyName
        documentUser.issuedProgram = company.issuedProgram
        documentUser.phoneNumber = company.phoneNumber
        documentUser.location = company.location
        documentUser.validateStatus = company.validateStatus
        documentUser.mediaLink = company.mediaLink
        documentUser.profilePicture = company.profilePicture
        return documentUser
      }
      case 'Director': {
        const director = user as Director
        documentUser.firstName = director.firstName
        documentUser.lastName = director.lastName
        documentUser.transactions = director.transactions
        documentUser.mediaLink = director.mediaLink
        documentUser.profilePicture = director.profilePicture
        return documentUser
      }
      default: {
        return null
      }
    }
  }

  public create(user: User): Promise<IUserDocument> {
    console.log(user)
    return UserModel.create(user)
  }

  public async save(user: User) {
    const documentUser = await this.parseUserDocument(user)
    documentUser?.save()
  }

  public async getUserByEmail(email: string): Promise<User | null> {
    const user = await UserModel.findOne({ email })
    return this.parseUser(user)
  }

}