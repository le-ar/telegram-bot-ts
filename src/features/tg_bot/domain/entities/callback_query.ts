import User from "./user";
import Message from "./message";

// https://core.telegram.org/bots/api#callbackquery
class CallbackQuery {
    id: string;
    from: User;
    message?: Message;
    inlineMessageId?: string;
    chatInstance: string;
    data?: string;
    gameShortName?: string;

    constructor(
        id: string,
        from: User,
        chatInstance: string,
        message?: Message,
        inlineMessageId?: string,
        data?: string,
        gameShortName?: string
    ) {
        this.id = id;
        this.from = from;
        this.chatInstance = chatInstance;
        this.message = message;
        this.inlineMessageId = inlineMessageId;
        this.data = data;
        this.gameShortName = gameShortName;
    }
}

export default CallbackQuery;