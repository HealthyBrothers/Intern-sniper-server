import { MediaLinkService } from "../services/MediaLinkService";
import MediaLink from "./MediaLink";

export class MediaLinkManager {

  public parseMediaLinks(mediaLinks: MediaLink[]): MediaLink[] {
    if(mediaLinks === null) return []

    const newMediaLinks: MediaLink[] = []
    console.log(mediaLinks)

    for(let mediaLink of mediaLinks) {
      const newMediaLink = new MediaLink(mediaLink.url, mediaLink.type)
      newMediaLinks.push(newMediaLink)
    }
    return newMediaLinks
  }
}