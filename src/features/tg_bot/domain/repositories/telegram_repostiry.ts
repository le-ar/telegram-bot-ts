import { ApiMessageRemoteDatasource } from "../../data/datasources/api_message_remote_datasource";
import { Failure } from "../../../../core/failures";
import { Update, User, SendMessageParam, GetUpdatesParam, SendPhotoParam, SendAnimationParam, SendVideoParam } from "telegram-bot-ts-types";

interface TelegramRepository {
    getUpdates(params: GetUpdatesParam): Promise<Update[] | Failure>;
    getMe(): Promise<User | Failure>;
    sendMessage(message: SendMessageParam): Promise<any | Failure>;
    sendPhoto(message: SendPhotoParam): Promise<any | Failure>;
    sendAnimation(message: SendAnimationParam): Promise<any | Failure>;
    sendVideo(message: SendVideoParam): Promise<any | Failure>;
}

export default TelegramRepository;