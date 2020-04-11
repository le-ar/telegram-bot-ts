import TelegramSubscriber from "../subscribers/telegram_subscriber";
import Update from "../../../domain/entities/update";

class TelegramPublisher {
    private subscribers: TelegramSubscriber[] = [];

    subscribe(telegramSubscriber: TelegramSubscriber) {
        this.subscribers.push(telegramSubscriber);
    }

    unsubscribe(telegramSubscriber: TelegramSubscriber) {
        let index = this.subscribers.indexOf(telegramSubscriber);
        
        if (index !== -1) {
            this.subscribers.splice(index, 1);
        }
    }

    publish(update: Update) {
        for (let subscriber of this.subscribers) {
            subscriber.update(update);
        }
    }
}

export default TelegramPublisher;