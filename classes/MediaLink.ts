import { mediaLinkType } from "./enum";

class MediaLink {
  url: string;
  type: mediaLinkType;

  constructor(url: string, type: mediaLinkType) {
    this.url = url;
    this.type = type;
  }
}

export default MediaLink;
