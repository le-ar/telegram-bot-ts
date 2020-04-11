import User from "./user";
import Location from "./Location";

// https://core.telegram.org/bots/api#choseninlineresult
class ChosenInlineResult {
    resultId: string;
    from: User;
    location?: Location;
    inlineMessageId?: string;
    query: string;

    constructor(
        resultId: string,
        from: User,
        query: string,
        location?: Location,
        inlineMessageId?: string
    ) {
        this.resultId = resultId;
        this.from = from;
        this.query = query;
        this.location = location;
        this.inlineMessageId = inlineMessageId;
    }
}

export default ChosenInlineResult;