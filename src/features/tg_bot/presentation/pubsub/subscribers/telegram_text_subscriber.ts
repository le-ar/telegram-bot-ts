import Update from "../../../domain/entities/update";
import TelegramSubscriber from "./telegram_subscriber";
import Message from "../../../domain/entities/message";

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