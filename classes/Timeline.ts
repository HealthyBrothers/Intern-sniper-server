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
}

export default Timeline;
