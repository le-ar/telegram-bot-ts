import TelegramPublisher from "../pubsub/publishers/telegram_publisher";
import { Message, CallbackQuery, Update } from "telegram-bot-ts-types";
import TelegramTextSubscriber from "../pubsub/subscribers/telegram_text_subscriber";
import TelegramCallbackSubscriber from "../pubsub/subscribers/telegram_callback_subscriber";
import TelegramAllSubscriber from "../pubsub/subscribers/telegram_all_subscriber";

class TelegramBotPubSub {
    private telegramPublisher: TelegramPublisher;

    initPubSub() {
        this.telegramPublisher = new TelegramPublisher();
    }

    get botTelegramPublisher(): TelegramPublisher {
        return this.telegramPublisher;
    }

    onText(callback: (message: Message) => void) {
        let telegramTextSubscriber = new TelegramTextSubscriber(callback);
        this.telegramPublisher.subscribe(telegramTextSubscriber);
    }

    onCallback(callback: (callback: CallbackQuery) => void) {
        let telegramCallbackSubscriber = new TelegramCallbackSubscriber(callback);
        this.telegramPublisher.subscribe(telegramCallbackSubscriber);
    }

    onAll(callback: (update: Update) => void) {
        let telegramAllSubscriber = new TelegramAllSubscriber(callback);
        this.telegramPublisher.subscribe(telegramAllSubscriber);
    }
}

export default TelegramBotPubSub;