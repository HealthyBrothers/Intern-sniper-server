import { mediaLinkService } from "../services/MediaLinkService";
import MediaLink from "./MediaLink";

export class MediaLinkManager {

  public parseMediaLinks(mediaLinks: MediaLink[]): MediaLink[] {
    const newMediaLinks: MediaLink[] = []

    for(let mediaLink of mediaLinks) {
      const newMediaLink = new MediaLink(mediaLink.url, mediaLink.type)
      newMediaLinks.push(newMediaLink)
    }
    return newMediaLinks
  }
}