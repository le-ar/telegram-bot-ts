import TelegramTextSubscriber from "./presentation/pubsub/subscribers/telegram_text_subscriber";
import TelegramCallbackSubscriber from "./presentation/pubsub/subscribers/telegram_callback_subscriber";
import TelegramPublisher from "./presentation/pubsub/publishers/telegram_publisher";
import { TelegramApiClient } from "./data/datasources/telegram_client";
import { ApiUserRemoteDatasourceImpl } from "./data/datasources/api_user_remote_datasource";
import { ApiMessageRemoteDatasourceImpl } from "./data/datasources/api_message_remote_datasource";
import { LongPollGetUpdates, Params } from "./domain/usecases/long_poll_get_updates";
import TelegramRepositoryImpl from "./data/repositories/telegram_repostiry_impl";
import { GetMe } from "./domain/usecases/get_me";
import { Failure, FailureUnauthorized } from "../../core/failures";
import { NoParams } from "../../core/usecases/usecase";
import { SendMessage } from "./domain/usecases/send_message";
import { Message, CallbackQuery, SendMessageParam } from "telegram-bot-ts-types";

class TelegramBot {
    private telegramPublisher: TelegramPublisher;

    private sendMessageUseCase: SendMessage;
    private longPollGetUpdates: LongPollGetUpdates;
    private getMe: GetMe;

    private botToken: string;

    constructor(botToken: string) {
        this.telegramPublisher = new TelegramPublisher();

        this.botToken = botToken;

        this.init();
    }

    init() {
        let telegramApiClient = new TelegramApiClient(this.botToken);

        let apiUserRemoteDatasourceImpl = new ApiUserRemoteDatasourceImpl(telegramApiClient);
        let apiMessageRemoteDatasourceImpl = new ApiMessageRemoteDatasourceImpl(telegramApiClient);

        let telegramRepository = new TelegramRepositoryImpl(apiMessageRemoteDatasourceImpl, apiUserRemoteDatasourceImpl);

        this.longPollGetUpdates = new LongPollGetUpdates(telegramRepository, 0);
        this.getMe = new GetMe(telegramRepository);
        this.sendMessageUseCase = new SendMessage(telegramRepository);

        this.telegramPublisher = new TelegramPublisher();
    }

    get botTelegramPublisher(): TelegramPublisher {
        return this.telegramPublisher;
    }

    async startLongPool() {
        let responseMe = await this.getMe.execute();
        if (responseMe instanceof Failure) {
            if (responseMe instanceof FailureUnauthorized) {
                throw new Error('Wrong bot token');
            }
            throw new Error(responseMe.getMessage());
        }

        let countErrors = 0;
        while (true) {
            let updates = await this.longPollGetUpdates.execute(new NoParams());
            if (updates instanceof Failure) {
                countErrors++;
                if (countErrors > 9) {
                    throw new Error(updates.getMessage());
                }

                continue;
            }

            countErrors = 0;

            for (let update of updates) {
                this.botTelegramPublisher.publish(update);
            }
        }
    }

    onText(callback: (message: Message) => void) {
        let telegramTextSubscriber = new TelegramTextSubscriber(callback);
        this.telegramPublisher.subscribe(telegramTextSubscriber);
    }

    onCallback(callback: (callback: CallbackQuery) => void) {
        let telegramCallbackSubscriber = new TelegramCallbackSubscriber(callback);
        this.telegramPublisher.subscribe(telegramCallbackSubscriber);
    }

    async sendMessage(message: SendMessageParam) {
        return await this.sendMessageUseCase.execute(message);
    }
}

export default TelegramBot;