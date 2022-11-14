import mongoose from "mongoose";

class Location {
  private locationId: String;
  private country: String;
  private province: String;

  constructor(locationId: String, country: String, province: String) {
    this.locationId = locationId;
    this.country = country;
    this.province = province;
  }
  public static getSchema(): mongoose.Schema {
    return new mongoose.Schema({
      locationId: String,
      country: String,
      province: String,
    });
  }

  public static getModel(): mongoose.Model<any> {
    if (mongoose.models.Location) {
      return mongoose.model("Location");
    } else {
      return mongoose.model("Location", this.getSchema());
    }
  }
}

export default Location;
