import User from "./user";

// https://core.telegram.org/bots/api#messageentity
class MessageEntity {
    type: string;
    offset: number;
    length: number;
    url?: string;
    user?: User;
    language?: string;

    constructor(
        type: string,
        offset: number,
        length: number,
        url?: string,
        user?: User,
        language?: string
    ) {
        this.type = type;
        this.offset = offset;
        this.length = length;
        this.url = url;
        this.user = user;
        this.language = language;
    }
}

export default MessageEntity;