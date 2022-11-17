import Company from "../classes/Company";
import User from "../classes/User";
import LocationModel, { ILocationDocument } from "../models/LocationModel";
import UserModel, { IUserDocument } from "../models/UserModel";
import { MediaLinkService } from "./MediaLinkService";

export class UserService {

  public async fetchAllUser(): Promise<IUserDocument[]> {
    const users: IUserDocument[] = await UserModel.find({})
    return users
  }

  public async create(user: User): Promise<IUserDocument> {
    // const mediaLinks = user.mediaLink
    // const mediaLinkService = new MediaLinkService()
    // const mediaLinksDocument = await mediaLinkService.create(mediaLinks)

    // let locationDocument: ILocationDocument | null = null
    // if((user as Company).location != null)
    //   locationDocument = await LocationModel.create((user as Company).location)

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
