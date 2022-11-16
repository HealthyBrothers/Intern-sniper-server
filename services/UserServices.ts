import User from "../classes/User";
import UserModel, { IUserDocument } from "../models/UserModel";

export class UserServices {

  public async fetchAllUser(): Promise<IUserDocument[]> {
    const users: IUserDocument[] = await UserModel.find({})
    return users
  }

  public create(user: User): Promise<IUserDocument> {
    const newUser = new UserModel(user)
    newUser.setPassword(user.password as string)
    return newUser.save()
  }

  public async validatePassword(user: User, password: string): Promise<boolean> {
    const documentUser = await UserModel.findOne({ email: user.email })
    if(documentUser === null) return false
    return documentUser?.validatePassword(password as string)
  }
}