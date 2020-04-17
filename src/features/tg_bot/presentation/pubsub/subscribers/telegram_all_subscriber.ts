import { Update } from "telegram-bot-ts-types";
import TelegramSubscriber from "./telegram_subscriber";

class TelegramAllSubscriber implements TelegramSubscriber {
    callback: (message: Update) => void;

    constructor(callback: (message: Update) => void) {
        this.callback = callback;
    }

    update(update: Update): void {
        this.callback(update);
    }
}

export default TelegramAllSubscriber;