class Location {
  private locationId: String;
  private country: String;
  private province: String;

  constructor(locationId: String, country: String, province: String) {
    this.locationId = locationId;
    this.country = country;
    this.province = province;
  }
}

export default Location;
