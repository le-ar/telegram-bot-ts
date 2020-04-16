import { UseCase } from "../../../../core/usecases/usecase";
import TelegramRepository from "../repositories/telegram_repostiry";
import { Failure } from "../../../../core/failures";
import { SendMessageParam, SendPhotoParam, SendAnimationParam } from "telegram-bot-ts-types";

class SendAnimation extends UseCase<any, SendAnimationParam> {
    telegramRepository: TelegramRepository;

    constructor(telegramRepository: TelegramRepository) {
        super();
        this.telegramRepository = telegramRepository;
    }

    async execute(message: SendAnimationParam): Promise<any | Failure> {
        return await this.telegramRepository.sendAnimation(message);
    }
}

export { SendAnimation };