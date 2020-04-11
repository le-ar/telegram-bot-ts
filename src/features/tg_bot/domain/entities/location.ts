// https://core.telegram.org/bots/api#location
class Location {
    longitude: number;
    latitude: number;

    constructor(
        longitude: number,
        latitude: number
    ) {
        this.longitude = longitude;
        this.latitude = latitude;
    }
}

export default Location;