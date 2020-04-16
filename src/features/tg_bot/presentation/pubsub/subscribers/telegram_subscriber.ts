import { Update } from "telegram-bot-ts-types";

abstract class TelegramSubscriber {
    abstract update(update: Update): void;
}

export default TelegramSubscriber;