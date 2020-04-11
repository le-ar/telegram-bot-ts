import Update from "../../../domain/entities/update";

abstract class TelegramSubscriber {
    abstract update(update: Update): void;
}

export default TelegramSubscriber;