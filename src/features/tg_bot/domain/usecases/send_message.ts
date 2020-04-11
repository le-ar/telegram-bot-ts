import { UseCase } from "../../../../core/usecases/usecase";
import TelegramRepository from "../repositories/telegram_repostiry";
import { Failure } from "../../../../core/failures";
import MessageResponse from "../../data/models/message_response";

class SendMessage extends UseCase<any, MessageResponse> {
    telegramRepository: TelegramRepository;

    constructor(telegramRepository: TelegramRepository) {
        super();
        this.telegramRepository = telegramRepository;
    }

    async execute(message: MessageResponse): Promise<any | Failure> {
        return await this.telegramRepository.sendMessage(message);
    }
}

export { SendMessage };