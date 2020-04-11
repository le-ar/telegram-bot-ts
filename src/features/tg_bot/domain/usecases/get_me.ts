import { UseCase, NoParams } from "../../../../core/usecases/usecase";
import TelegramRepository from "../repositories/telegram_repostiry";
import { Failure } from "../../../../core/failures";
import User from "../entities/user";

class GetMe extends UseCase<any, NoParams> {
    telegramRepository: TelegramRepository;

    constructor(telegramRepository: TelegramRepository) {
        super();
        this.telegramRepository = telegramRepository;
    }

    async execute(): Promise<User | Failure> {
        return await this.telegramRepository.getMe();
    }
}

export { GetMe };