import { UseCase } from "../../../../core/usecases/usecase";
import TelegramRepository from "../repositories/telegram_repostiry";
import { Failure } from "../../../../core/failures";
import { SendMessageParam, Message } from "telegram-bot-ts-types";

class SendMessage extends UseCase<any, SendMessageParam> {
    telegramRepository: TelegramRepository;

    constructor(telegramRepository: TelegramRepository) {
        super();
        this.telegramRepository = telegramRepository;
    }

    async execute(message: SendMessageParam): Promise<Message | Failure> {
        return await this.telegramRepository.sendMessage(message);
    }
}

export { SendMessage };