import { mediaLinkService } from "../services/MediaLinkService";
import MediaLink from "./MediaLink";

export class MediaLinkManager {
  mediaLinkService: mediaLinkService

  constructor() {
    this.mediaLinkService = new mediaLinkService()
  }

  public create(mediaLink: MediaLink[]) {
    console.log(mediaLink)
    // this.mediaLinkService.create(mediaLinks)

    // return mediaLinks[]
  }
}