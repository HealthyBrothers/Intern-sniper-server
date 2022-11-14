import mongoose from "mongoose";

class Timeline {
  private timelineId: String;
  private eventName: String;
  private startDate: String;
  private endDate: String;
  private status: String;

  constructor(
    timelineId: String,
    eventName: String,
    startDate: String,
    endDate: String,
    status: String
  ) {
    this.timelineId = timelineId;
    this.eventName = eventName;
    this.startDate = startDate;
    this.endDate = endDate;
    this.status = status;
  }
  public static getSchema(): mongoose.Schema {
    return new mongoose.Schema({
      timelineId: String,
      eventName: String,
      startDate: String,
      endDate: String,
      status: String,
    });
  }

  public static getModel(): mongoose.Model<any> {
    if (mongoose.models.Timeline) {
      return mongoose.model("Timeline");
    } else {
      return mongoose.model("Timeline", this.getSchema());
    }
  }
}

export default Timeline;
