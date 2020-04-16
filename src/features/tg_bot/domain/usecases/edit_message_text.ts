import { UseCase } from "../../../../core/usecases/usecase";
import TelegramRepository from "../repositories/telegram_repostiry";
import { Failure } from "../../../../core/failures";
import { EditMessageTextParam } from "telegram-bot-ts-types";

class EditMessageText extends UseCase<any, EditMessageTextParam> {
    telegramRepository: TelegramRepository;

    constructor(telegramRepository: TelegramRepository) {
        super();
        this.telegramRepository = telegramRepository;
    }

    async execute(message: EditMessageTextParam): Promise<any | Failure> {
        return await this.telegramRepository.editMessageText(message);
    }
}

export { EditMessageText };