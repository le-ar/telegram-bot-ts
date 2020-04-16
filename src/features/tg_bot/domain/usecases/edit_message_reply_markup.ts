import { UseCase } from "../../../../core/usecases/usecase";
import TelegramRepository from "../repositories/telegram_repostiry";
import { Failure } from "../../../../core/failures";
import { EditMessageReplyMarkupParam } from "telegram-bot-ts-types";

class EditMessageReplyMarkup extends UseCase<any, EditMessageReplyMarkupParam> {
    telegramRepository: TelegramRepository;

    constructor(telegramRepository: TelegramRepository) {
        super();
        this.telegramRepository = telegramRepository;
    }

    async execute(message: EditMessageReplyMarkupParam): Promise<any | Failure> {
        return await this.telegramRepository.editMessageReplyMarkup(message);
    }
}

export { EditMessageReplyMarkup };