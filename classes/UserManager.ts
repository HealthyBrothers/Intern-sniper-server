import { IUserDocument } from "../models/UserModel";
import { UserServices } from "../services/UserServices";
import Company from "./Company";
import Director from "./Director";
import Student from "./Student";
import User from "./User";

export class UserManager {
  users: User[]
  userServices: UserServices

  constructor() {
    this.userServices = new UserServices()
  }

  async initialize() {
    const documentUsers = await this.userServices.fetchAllUser()
    this.users = this.parseUser(documentUsers)
  }

  private parseUser(documentUsers: IUserDocument[]): User[] {
    let users: User[] = []

    documentUsers.forEach(user => {
      const { role, email, password, firstName,
        lastName, studyingYear, profilePicture,
        university, interestedField, favoriteProgram,
        mediaLink, transactions, companyName, issuedProgram,
        phoneNumber, location } = user

      switch (role) {
        case 'Student': {
          const student = new Student(email, firstName, lastName,
            studyingYear, interestedField, null,
            university, password, null, profilePicture)
          users.push(student)
          break
        }
        case 'Company': {
          const company = new Company(email, companyName,
            null, profilePicture, phoneNumber,
            null, null, password)
          users.push(company)
          break
        }
        case 'Director': {
          const director = new Director(email, firstName,
            lastName, null, password,
            null, profilePicture)
          users.push(director)
          break
        }
        default: {
          return null
        }
      }
    });
    return users
  }

  public createStudent(student: Student): Promise<IUserDocument> {
    const newStudent = new Student(student.email, student.firstName,
      student.lastName, student.studyingYear, student.interestedField,
      null, student.university, student.password,
      student.mediaLink, student.profilePicture)

    this.users.push(newStudent)
    return this.userServices.create(newStudent)
  }

  public createCompany(company: Company) {
    const newCompany = new Company(company.email, company.companyName,
      null, company.profilePicture, company.phoneNumber,
      company.mediaLink, company.location, company.password)

    this.users.push(newCompany)
    return this.userServices.create(newCompany)
  }

  public getUserByEmail(email: string): User | null {
    for (let user of this.users) {
      if (user.email === email) return user
    }
    return null
  }

  public validatePassword(user: User, password: string): Promise<boolean> {
    return this.userServices.validatePassword(user, password)
  }
}