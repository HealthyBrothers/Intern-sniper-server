import UserModel, { IUserDocument } from "../models/userModel";
import Company from "../types/Company";
import Director from "../types/Director";
import Student from "../types/Student";
import User from "../types/User";
import mongoose from "mongoose";

export class UserManager {
  private parseUser(documentUser: IUserDocument | null): User | null {
    if (documentUser === null) return null;

    const {
      id,
      role,
      email,
      password,
      salt,
      firstName,
      lastName,
      studyingYear,
      profilePicture,
      university,
      interestedField,
      favoriteProgram,
      mediaLink,
      transactions,
      companyName,
      issuedProgram,
      phoneNumber,
      location,
      validateStatus,
    } = documentUser;

    switch (role) {
      case "Student": {
        const student = new Student(
          id,
          email,
          firstName,
          lastName,
          studyingYear,
          interestedField,
          favoriteProgram,
          university,
          password,
          salt,
          mediaLink,
          profilePicture
        );
        return student;
      }
      case "Company": {
        const company = new Company(
          id,
          email,
          companyName,
          issuedProgram,
          profilePicture,
          phoneNumber,
          mediaLink,
          location,
          password,
          salt,
          validateStatus
        );
        return company;
      }
      case "Director": {
        const director = new Director(
          id,
          email,
          firstName,
          lastName,
          transactions,
          password,
          salt,
          mediaLink,
          profilePicture
        );
        return director;
      }
      default: {
        return null;
      }
    }
  }

  public create(user: User): Promise<IUserDocument> {
    console.log(user);
    return UserModel.create(user);
  }

  public async getUserByEmail(email: String): Promise<User | null> {
    const user = await UserModel.findOne({ email });
    return this.parseUser(user);
  }

  public async getUserById(id: string): Promise<User | null> {
    const user = await UserModel.findById(id)
    return this.parseUser(user);
  }

  public async findUserById(id: String): Promise<IUserDocument> {
    const user = await UserModel.findById(id);
    return <IUserDocument>user;
  }

  public async updateStudentProfileById(id: String, student: Student) {
    UserModel.findByIdAndUpdate(
      id,
      {
        firstName: student.firstName,
        lastName: student.lastName,
        studyingYear: student.studyingYear,
        university: student.university,
        interestedField: student.interestedField,
        favoriteProgram: student.favoriteProgram,
        profilePicture: student.profilePicture,
        mediaLink: student.mediaLink,
      },
      (err, docs) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Updated User : ", docs);
        }
      }
    );
  }

  public updateUserById(
    id: String,
    user: User | Company | Student | Director
  ): void {
    UserModel.findByIdAndUpdate(id, { ...user }, (err, docs) => {
      if (err) {
        console.log(err);
      } else if (docs) {
        console.log("Updated User : ", docs);
      }
    });
  }
  private async parseUserDocument(user: User): Promise<IUserDocument | null> {
    let documentUser: IUserDocument | null = await UserModel.findById(
      user.userId
    );

    if (documentUser === null) return null;

    const { role } = documentUser;

    switch (role) {
      case "Student": {
        const student = user as Student;
        documentUser.firstName = student.firstName;
        documentUser.lastName = student.lastName;
        documentUser.studyingYear = student.studyingYear;
        documentUser.interestedField = student.interestedField;
        documentUser.favoriteProgram = student.favoriteProgram;
        documentUser.university = student.university;
        documentUser.mediaLink = student.mediaLink;
        documentUser.profilePicture = student.profilePicture;
        return documentUser;
      }
      case "Company": {
        const company = user as Company;
        documentUser.companyName = company.companyName;
        documentUser.issuedProgram = company.issuedProgram;
        documentUser.phoneNumber = company.phoneNumber;
        documentUser.location = company.location;
        documentUser.validateStatus = company.validateStatus;
        documentUser.mediaLink = company.mediaLink;
        documentUser.profilePicture = company.profilePicture;
        return documentUser;
      }
      case "Director": {
        const director = user as Director;
        documentUser.firstName = director.firstName;
        documentUser.lastName = director.lastName;
        documentUser.transactions = director.transactions;
        documentUser.mediaLink = director.mediaLink;
        documentUser.profilePicture = director.profilePicture;
        return documentUser;
      }
      default: {
        return null;
      }
    }
  }

  public async save(user: User) {
    const documentUser = await this.parseUserDocument(user);
    documentUser?.save();
  }
}
