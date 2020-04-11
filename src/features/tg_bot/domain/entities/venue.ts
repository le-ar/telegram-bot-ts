import Location from "./Location";

// https://core.telegram.org/bots/api#venue
class Venue {
    location: Location;
    title: string;
    address: string;
    foursquareId?: string;
    foursquareType?: string;

    constructor(
        location: Location,
        title: string,
        address: string,
        foursquareId?: string,
        foursquareType?: string
    ) {
        this.location = location;
        this.title = title;
        this.address = address;
        this.foursquareId = foursquareId;
        this.foursquareType = foursquareType;
    }
}

export default Venue;