import Update from "../../../domain/entities/update";
import TelegramSubscriber from "./telegram_subscriber";
import Message from "../../../domain/entities/message";
import CallbackQuery from "../../../domain/entities/callback_query";

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