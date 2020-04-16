import { Update, Message } from "telegram-bot-ts-types";
import TelegramSubscriber from "./telegram_subscriber";

class TelegramTextSubscriber implements TelegramSubscriber {
    callback: (message: Message) => void;

    constructor(callback: (message: Message) => void) {
        this.callback = callback;
    }

    update(update: Update): void {
        if (update.message !== null && update.message.text !== null) {
            this.callback(update.message);
        }
    }
}

export default TelegramTextSubscriber;