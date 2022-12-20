import mongoose from 'mongoose';
import MediaLink from '../types/MediaLink';

export interface IMediaLinkDocument extends MediaLink {}

export const MediaLinkSchema: mongoose.Schema = new mongoose.Schema({
  url: { type: String, required: true },
  type: { type: String, require: true }
});

const MediaLinkModel = mongoose.model<IMediaLinkDocument>(
  'MediaLink',
  MediaLinkSchema
);

export default MediaLinkModel;
