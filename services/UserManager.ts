import UserModel, { IUserDocument } from "../models/userModel";
import Company from "../classes/Company";
import Director from "../classes/Director";
import Student from "../classes/Student";
import User from "../classes/User";
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
          email,
          firstName,
          lastName,
          studyingYear,
          interestedField,
          null,
          university,
          password,
          salt,
          null,
          profilePicture
        );
        return student;
      }
      case "Company": {
        const company = new Company(
          email,
          companyName,
          null,
          profilePicture,
          phoneNumber,
          null,
          null,
          password,
          salt,
          validateStatus
        );
        return company;
      }
      case "Director": {
        const director = new Director(
          email,
          firstName,
          lastName,
          null,
          password,
          salt,
          null,
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

  public updateUserById(id: String, user: User | Company | Student): void {
    UserModel.findByIdAndUpdate(id, { ...user }, (err, docs) => {
      if (err) {
        console.log(err);
      } else if (docs) {
        console.log("Updated User : ", docs);
      }
    });
  }

  // public async updateUserById(
  //   id: String,
  //   user: User | Company | Student
  // ): Promise<mongoose.Types.ObjectId> {
  //   let _id;
  //   UserModel.findByIdAndUpdate(id, { ...user }, (err, docs) => {
  //     if (err) {
  //       console.log(err);
  //     } else if (docs) {
  //       console.log("Updated User : ", docs);
  //       _id = docs._id as mongoose.Types.ObjectId;
  //       console.log(_id);
  //     }
  //   });

  //   return <mongoose.Types.ObjectId>_id;
  // }
}
