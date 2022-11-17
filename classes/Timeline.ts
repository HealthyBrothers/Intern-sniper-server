class Timeline {
  eventName: String;
  startDate: String;
  endDate: String;
  status: String;

  constructor(
    eventName: String,
    startDate: String,
    endDate: String,
    status: String
  ) {
    this.eventName = eventName;
    this.startDate = startDate;
    this.endDate = endDate;
    this.status = status;
  }
}

export default Timeline;
