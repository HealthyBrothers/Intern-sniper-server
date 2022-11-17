import MediaLink from "../classes/MediaLink";
import MediaLinkModel, { IMediaLinkDocument } from "../models/MediaLinkModel";

export class MediaLinkService {
  public async create(
    mediaLinks: MediaLink[] | null
  ): Promise<IMediaLinkDocument[]> {
    const mediaLinksDocument: IMediaLinkDocument[] = [];
    if (mediaLinks !== null) {
      for (let mediaLink of mediaLinks) {
        const mediaLinkDocument = await MediaLinkModel.create(mediaLink);
        mediaLinksDocument.push(mediaLinkDocument);
      }
    }
    return mediaLinksDocument;
  }
}
