import { ApiMessageRemoteDatasource } from "../datasources/api_message_remote_datasource";
import { Failure } from "../../../../core/failures";
import TelegramRepository from "../../domain/repositories/telegram_repostiry";
import { Update, User, SendMessageParam, GetUpdatesParam, SendPhotoParam, SendAnimationParam, SendVideoParam, EditMessageTextParam, EditMessageReplyMarkupParam } from "telegram-bot-ts-types";
import { ApiUserRemoteDatasource } from "../datasources/api_user_remote_datasource";

class TelegramRepositoryImpl implements TelegramRepository {
    apiMessageRemoteDatasource: ApiMessageRemoteDatasource;
    apiUserRemoteDatasource: ApiUserRemoteDatasource;

    constructor(
        apiMessageRemoteDatasource: ApiMessageRemoteDatasource,
        apiUserRemoteDatasource: ApiUserRemoteDatasource
    ) {
        this.apiUserRemoteDatasource = apiUserRemoteDatasource;
        this.apiMessageRemoteDatasource = apiMessageRemoteDatasource;
    }

    public async getUpdates(params: GetUpdatesParam): Promise<Update[] | Failure> {
        return await this.apiMessageRemoteDatasource.getUpdates(params);
    }

    public async getMe(): Promise<User | Failure> {
        return await this.apiUserRemoteDatasource.getMe();
    }

    public async sendMessage(message: SendMessageParam): Promise<any | Failure> {
        return await this.apiMessageRemoteDatasource.sendMessage(message);
    }

    public async sendPhoto(message: SendPhotoParam): Promise<any | Failure> {
        return await this.apiMessageRemoteDatasource.sendPhoto(message);
    }

    public async sendAnimation(message: SendAnimationParam): Promise<any | Failure> {
        return await this.apiMessageRemoteDatasource.sendAnimation(message);
    }

    public async sendVideo(message: SendVideoParam): Promise<any | Failure> {
        return await this.apiMessageRemoteDatasource.sendVideo(message);
    }

    public async editMessageText(message: EditMessageTextParam): Promise<any | Failure> {
        return await this.apiMessageRemoteDatasource.editMessageText(message);
    }

    public async editMessageReplyMarkup(message: EditMessageReplyMarkupParam): Promise<any | Failure> {
        return await this.apiMessageRemoteDatasource.editMessageReplyMarkup(message);
    }
}

export default TelegramRepositoryImpl;