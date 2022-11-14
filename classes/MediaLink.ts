import { mediaLinkType } from "./enum";

class MediaLink {
  private linkId: string;
  private url: string;
  private type: mediaLinkType;

  constructor(linkId: string, url: string, type: mediaLinkType) {
    this.linkId = linkId;
    this.url = url;
    this.type = type;
  }
}

export default MediaLink;
