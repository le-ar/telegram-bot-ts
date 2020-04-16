import { ApiMessageRemoteDatasource } from "../../data/datasources/api_message_remote_datasource";
import { Failure } from "../../../../core/failures";
import { Update, User } from "telegram-bot-ts-types";
import MessageResponse from "../../data/models/message_response";

interface TelegramRepository {
    getUpdates(offset: number): Promise<Update[] | Failure>;
    getMe(): Promise<User | Failure>;
    sendMessage(message: MessageResponse): Promise<any | Failure>;
}

export default TelegramRepository;