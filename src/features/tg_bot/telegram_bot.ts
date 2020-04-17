import { TelegramApiClient } from "./data/datasources/telegram_client";
import { ApiUserRemoteDatasourceImpl } from "./data/datasources/api_user_remote_datasource";
import { ApiMessageRemoteDatasourceImpl } from "./data/datasources/api_message_remote_datasource";
import { LongPollGetUpdates } from "./domain/usecases/long_poll_get_updates";
import TelegramRepositoryImpl from "./data/repositories/telegram_repostiry_impl";
import { Failure, FailureUnauthorized } from "../../core/failures";
import { NoParams } from "../../core/usecases/usecase";
import TelegramBotMethods from "./presentation/mixins/telegram_bot_methods";
import applyMixins from "../../core/mixins";
import TelegramBotPubSub from "./presentation/mixins/telegram_bot_pubsub";

class TelegramBot {
    private longPollGetUpdates: LongPollGetUpdates;

    private botToken: string;

    constructor(botToken: string) {
        this.botToken = botToken;

        this.init();
    }

    init() {
        //!
        let telegramApiClient = new TelegramApiClient(this.botToken);
        
        //!
        let apiUserRemoteDatasourceImpl = new ApiUserRemoteDatasourceImpl(telegramApiClient);
        let apiMessageRemoteDatasourceImpl = new ApiMessageRemoteDatasourceImpl(telegramApiClient);
        
        //!
        let telegramRepository = new TelegramRepositoryImpl(apiMessageRemoteDatasourceImpl, apiUserRemoteDatasourceImpl);

        //!
        this.initUseCases(telegramRepository);

        this.longPollGetUpdates = new LongPollGetUpdates(telegramRepository, 0);

        this.initPubSub();
    }

    async startLongPoll() {
        let responseMe = await this.getMe();
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
}

interface TelegramBot extends TelegramBotMethods, TelegramBotPubSub { }

applyMixins(TelegramBot, [TelegramBotMethods, TelegramBotPubSub]);

export default TelegramBot;