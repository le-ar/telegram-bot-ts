import User from "./user";
import Location from "./Location";

// https://core.telegram.org/bots/api#inlinequery
class InlineQuery {
    id: string;
    from: User;
    location: Location;
    query: string;
    offset: string;

    constructor(
        id: string,
        from: User,
        query: string,
        offset: string,
        location?: Location
    ) {
        this.id = id;
        this.from = from;
        this.location = location;
        this.query = query;
        this.offset = offset;
    }
}

export default InlineQuery;