import { Failure } from "../../../../core/failures";
import { Update, User, SendMessageParam, GetUpdatesParam, SendPhotoParam, SendAnimationParam, SendVideoParam, EditMessageTextParam, EditMessageReplyMarkupParam, Message } from "telegram-bot-ts-types";

interface TelegramRepository {
    getUpdates(params: GetUpdatesParam): Promise<Update[] | Failure>;
    getMe(): Promise<User | Failure>;
    sendMessage(message: SendMessageParam): Promise<Message | Failure>;
    sendPhoto(message: SendPhotoParam): Promise<Message | Failure>;
    sendAnimation(message: SendAnimationParam): Promise<Message | Failure>;
    sendVideo(message: SendVideoParam): Promise<Message | Failure>;
    editMessageText(message: EditMessageTextParam): Promise<Message | Failure>;
    editMessageReplyMarkup(message: EditMessageReplyMarkupParam): Promise<Message | Failure>;
}

export default TelegramRepository;