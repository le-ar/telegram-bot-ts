import MessageModel from "../models/message_model";
import { Failure, FailureApi } from "../../../../core/failures";
import { ApiClient } from "./telegram_client";
import UpdateModel from "../models/update_model";
import MessageResponse from "../models/message_response";

interface ApiMessageRemoteDatasource {
    getUpdates(offset: number): Promise<UpdateModel[] | Failure>;
    sendMessage(message: MessageResponse): Promise<any | Failure>;
}

class ApiMessageRemoteDatasourceImpl implements ApiMessageRemoteDatasource {
    private client: ApiClient;

    constructor(client: ApiClient) {
        this.client = client;
    }

    public async getUpdates(offset: number): Promise<UpdateModel[] | Failure> {
        let response = await this.client.execute('getUpdates', { offset: offset });
        if (response instanceof Failure) {
            return response;
        }

        if (!this.checkResponse(response)) {
            return new FailureApi();
        }

        let jsonResponse = JSON.parse(response)['result'];
        let updates: UpdateModel[] = [];
        for (let update of jsonResponse) {
            let updateModel = UpdateModel.fromJson(update);
            if (updateModel instanceof UpdateModel) {
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