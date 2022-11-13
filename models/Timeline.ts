class Timeline {
  timelineId: String;
  eventName: String;
  startDate: String;
  endDate: String;
  status: String;

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
