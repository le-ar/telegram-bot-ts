import { UseCase, NoParams } from "../../../../core/usecases/usecase";
import { Update } from "telegram-bot-ts-types";
import TelegramRepository from "../repositories/telegram_repostiry";
import { Failure } from "../../../../core/failures";

class LongPollGetUpdates extends UseCase<Update[], Params> {
    telegramRepository: TelegramRepository;

    private lastOffset = 0;

    constructor(telegramRepository: TelegramRepository, initOffset: number) {
        super();
        this.telegramRepository = telegramRepository;
        this.lastOffset = initOffset;
    }

    async execute(params: Params | NoParams): Promise<Update[] | Failure> {
        if (params instanceof Params) {
            return await this.executeWithoutParams(params.offset);
        }

        return await this.executeWithUpdate();
    }

    private async executeWithUpdate(): Promise<Update[] | Failure> {
        let updates = await this.telegramRepository.getUpdates(this.lastOffset);
        if (updates instanceof Failure) {
            return updates;
        }

        this.updateLastOffset(updates);

        return updates;
    }

    private async executeWithoutParams(offset: number): Promise<Update[] | Failure> {
        let updates = await this.telegramRepository.getUpdates(offset);

        return updates;
    }

    private updateLastOffset(updates: Update[]) {
        for (let update of updates) {
            this.lastOffset = update.updateId + 1;
        }
    }
}

class Params {
    offset: number;

    constructor(offset: number) {
        this.offset = offset;
    }
}

export { LongPollGetUpdates, Params };