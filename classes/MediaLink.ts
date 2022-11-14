import mongoose from "mongoose";
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
  public static getSchema() {
    return new mongoose.Schema({
      linkId: String,
      url: String,
      type: String,
    });
  }

  public static getModel(): mongoose.Model<any> {
    if (mongoose.models.MediaLink) {
      return mongoose.model("MediaLink");
    } else {
      return mongoose.model("MediaLink", this.getSchema());
    }
  }
}

export default MediaLink;
