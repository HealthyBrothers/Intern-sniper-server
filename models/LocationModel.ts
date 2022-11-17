import mongoose from "mongoose";
import Location from "../classes/Location";

export interface ILocationDocument extends mongoose.Document, Location {}

export const LocationSchema: mongoose.Schema =
  new mongoose.Schema<ILocationDocument>({
    country: { type: String, required: true },
    province: { type: String, required: true },
  });

const LocationModel = mongoose.model<ILocationDocument>(
  "Location",
  LocationSchema
);

export default LocationModel;
