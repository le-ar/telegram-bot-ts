import { UseCase } from "../../../../core/usecases/usecase";
import TelegramRepository from "../repositories/telegram_repostiry";
import { Failure } from "../../../../core/failures";
import { SendVideoParam } from "telegram-bot-ts-types";

class SendVideo extends UseCase<any, SendVideoParam> {
    telegramRepository: TelegramRepository;

    constructor(telegramRepository: TelegramRepository) {
        super();
        this.telegramRepository = telegramRepository;
    }

    async execute(message: SendVideoParam): Promise<any | Failure> {
        return await this.telegramRepository.sendVideo(message);
    }
}

export { SendVideo };