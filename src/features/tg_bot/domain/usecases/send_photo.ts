import { UseCase } from "../../../../core/usecases/usecase";
import TelegramRepository from "../repositories/telegram_repostiry";
import { Failure } from "../../../../core/failures";
import { SendPhotoParam, Message } from "telegram-bot-ts-types";

class SendPhoto extends UseCase<any, SendPhotoParam> {
    telegramRepository: TelegramRepository;

    constructor(telegramRepository: TelegramRepository) {
        super();
        this.telegramRepository = telegramRepository;
    }

    async execute(message: SendPhotoParam): Promise<Message | Failure> {
        return await this.telegramRepository.sendPhoto(message);
    }
}

export { SendPhoto };