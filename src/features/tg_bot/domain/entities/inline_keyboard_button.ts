import LoginUrl from "./login_url";
import CallbackGame from "./callback_game";

// https://core.telegram.org/bots/api#inlinekeyboardbutton
class InlineKeyboardButton {
    text: string;
    url?: string;
    loginUrl?: LoginUrl;
    callbackData?: string;
    switchInlineQuery?: string;
    switchInlineQueryCurrentChat?: string;
    callbackGame?: CallbackGame;
    pay?: boolean;

    constructor(
        text: string,
        url?: string,
        loginUrl?: LoginUrl,
        callbackData?: string,
        switchInlineQuery?: string,
        switchInlineQueryCurrentChat?: string,
        callbackGame?: CallbackGame,
        pay?: boolean
    ) {
        this.text = text;
        this.url = url;
        this.loginUrl = loginUrl;
        this.loginUrl = loginUrl;
        this.callbackData = callbackData;
        this.switchInlineQuery = switchInlineQuery;
        this.switchInlineQueryCurrentChat = switchInlineQueryCurrentChat;
        this.callbackGame = callbackGame;
        this.pay = pay;
    }
}

export default InlineKeyboardButton;