import { Failure, FailureApi } from "../../../../core/failures";
import { ApiClient } from "./telegram_client";
import MessageResponse from "../models/message_response";
import { Update, UpdateSerializer } from "telegram-bot-ts-types";

interface ApiMessageRemoteDatasource {
    getUpdates(offset: number): Promise<Update[] | Failure>;
    sendMessage(message: MessageResponse): Promise<any | Failure>;
}

class ApiMessageRemoteDatasourceImpl implements ApiMessageRemoteDatasource {
    private client: ApiClient;

    constructor(client: ApiClient) {
        this.client = client;
    }

    public async getUpdates(offset: number): Promise<Update[] | Failure> {
        let response = await this.client.execute('getUpdates', { offset: offset });
        if (response instanceof Failure) {
            return response;
        }

        if (!this.checkResponse(response)) {
            return new FailureApi();
        }

        let jsonResponse = JSON.parse(response)['result'];
        let updates: Update[] = [];
        for (let update of jsonResponse) {
            let updateModel = UpdateSerializer.fromJson(update);
            if (updateModel instanceof Update) {
                updates.push(updateModel);
            }
        }

        return updates;
    }

    async sendMessage(message: MessageResponse): Promise<any | Failure> {
        let response = await this.client.executeJson('sendMessage', message.toJsonString());
        if (response instanceof Failure) {
            return response;
        }

        if (!this.checkResponse(response)) {
            return new FailureApi();
        }

        return response['result'];
    }

    private checkResponse(response: string): boolean {
        try {
            let jsonResponse = JSON.parse(response);
            return (typeof jsonResponse === 'object' && 'ok' in jsonResponse && 'result' in jsonResponse && jsonResponse.ok);
        } catch (e) { }

        return false;
    }
}

export { ApiMessageRemoteDatasource, ApiMessageRemoteDatasourceImpl };