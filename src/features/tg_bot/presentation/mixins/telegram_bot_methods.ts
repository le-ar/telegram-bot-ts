import TelegramRepository from "../../domain/repositories/telegram_repostiry";
import { SendPhoto } from "../../domain/usecases/send_photo";
import { SendMessage } from "../../domain/usecases/send_message";
import { SendAnimation } from "../../domain/usecases/send_animation";
import { SendVideo } from "../../domain/usecases/send_video";
import { EditMessageText } from "../../domain/usecases/edit_message_text";
import { EditMessageReplyMarkup } from "../../domain/usecases/edit_message_reply_markup";
import { GetMe } from "../../domain/usecases/get_me";
import { User, SendMessageParam, SendPhotoParam, SendAnimationParam, SendVideoParam, EditMessageTextParam, EditMessageReplyMarkupParam, Message } from "telegram-bot-ts-types";
import { Failure } from "../../../../core/failures";

class TelegramBotMethods {
    
    private getMeUseCase: GetMe;
    
    private sendPhotoUseCase: SendPhoto;
    private sendMessageUseCase: SendMessage;
    private sendAnimationUseCase: SendAnimation;
    private sendVideoUseCase: SendVideo;
    private editMessageTextUseCase: EditMessageText;
    private editMessageReplyMarkupUseCase: EditMessageReplyMarkup;

    initUseCases(telegramRepository: TelegramRepository) {
        this.getMeUseCase = new GetMe(telegramRepository);

        this.sendMessageUseCase = new SendMessage(telegramRepository);
        this.sendPhotoUseCase = new SendPhoto(telegramRepository);
        this.sendAnimationUseCase = new SendAnimation(telegramRepository);
        this.sendVideoUseCase = new SendVideo(telegramRepository);
        this.editMessageTextUseCase = new EditMessageText(telegramRepository);
        this.editMessageReplyMarkupUseCase = new EditMessageReplyMarkup(telegramRepository);
    }

    async getMe(): Promise<User | Failure> {
        return await this.getMeUseCase.execute();
    }

    async sendMessage(message: ConstructorParameters<typeof SendMessageParam>[0]): Promise<Message | Failure> {
        return await this.sendMessageUseCase.execute(new SendMessageParam(message));
    }

    async sendPhoto(message: ConstructorParameters<typeof SendPhotoParam>[0]): Promise<Message | Failure> {
        return await this.sendPhotoUseCase.execute(new SendPhotoParam(message));
    }

    async sendAnimation(message: ConstructorParameters<typeof SendAnimationParam>[0]): Promise<Message | Failure> {
        return await this.sendAnimationUseCase.execute(new SendAnimationParam(message));
    }

    async sendVideo(message: ConstructorParameters<typeof SendVideoParam>[0]): Promise<Message | Failure> {
        return await this.sendVideoUseCase.execute(new SendVideoParam(message));
    }

    async editMessageText(message: ConstructorParameters<typeof EditMessageTextParam>[0]): Promise<Message | Failure> {
        return await this.editMessageTextUseCase.execute(new EditMessageTextParam(message));
    }

    async editMessageReplyMarkup(message: ConstructorParameters<typeof EditMessageReplyMarkupParam>[0]): Promise<Message | Failure> {
        return await this.editMessageReplyMarkupUseCase.execute(new EditMessageReplyMarkupParam(message));
    }
}

export default TelegramBotMethods;