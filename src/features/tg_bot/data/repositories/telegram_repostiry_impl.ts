import { ApiMessageRemoteDatasource } from "../datasources/api_message_remote_datasource";
import { Failure } from "../../../../core/failures";
import TelegramRepository from "../../domain/repositories/telegram_repostiry";
import Update from "../../domain/entities/update";
import User from "../../domain/entities/user";
import { ApiUserRemoteDatasource } from "../datasources/api_user_remote_datasource";
import MessageResponse from "../models/message_response";

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

    public async getUpdates(offset: number): Promise<Update[] | Failure> {
        return await this.apiMessageRemoteDatasource.getUpdates(offset);
    }

    public async getMe(): Promise<User | Failure> {
        return await this.apiUserRemoteDatasource.getMe();
    }

    public async sendMessage(message: MessageResponse): Promise<any | Failure> {
        return await this.apiMessageRemoteDatasource.sendMessage(message);
    }
}

export default TelegramRepositoryImpl;