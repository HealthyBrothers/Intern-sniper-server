import User from "../classes/User";
import MediaLinkModel, { IMediaLinkDocument } from "../models/MadiaLinkModel";
import UserModel, { IUserDocument } from "../models/UserModel";
import { MediaLinkService } from "./MediaLinkService";

export class UserService {

  public async fetchAllUser(): Promise<IUserDocument[]> {
    const users: IUserDocument[] = await UserModel.find({})
    return users
  }

  public async create(user: User): Promise<IUserDocument> {
    const mediaLinks = user.mediaLink
    const mediaLinkService = new MediaLinkService()
    const mediaLinksDocument = await mediaLinkService.create(mediaLinks)

    const newUser = new UserModel({ ...user, mediaLink: mediaLinksDocument })
    newUser.setPassword(user.password as string)
    return newUser.save()
  }

  public async validatePassword(user: User, password: string): Promise<boolean> {
    const documentUser = await UserModel.findOne({ email: user.email })
    if(documentUser === null) return false
    return documentUser?.validatePassword(password as string)
  }
}