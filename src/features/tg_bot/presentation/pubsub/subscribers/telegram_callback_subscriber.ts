import { Update, Message, CallbackQuery } from "telegram-bot-ts-types";
import TelegramSubscriber from "./telegram_subscriber";

class TelegramCallbackSubscriber implements TelegramSubscriber {
    callback: (callback: CallbackQuery) => void;

    constructor(callback: (callback: CallbackQuery) => void) {
        this.callback = callback;
    }

    update(update: Update): void {
        if (update.callbackQuery !== null) {
            this.callback(update.callbackQuery);
        }
    }
}

export default TelegramCallbackSubscriber;