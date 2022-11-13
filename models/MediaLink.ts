import { mediaLinkType } from "./enum";

class MediaLink {
  linkId: string;
  url: string;
  type: mediaLinkType;

  constructor(linkId: string, url: string, type: mediaLinkType) {
    this.linkId = linkId;
    this.url = url;
    this.type = type;
  }
}

export default MediaLink;
