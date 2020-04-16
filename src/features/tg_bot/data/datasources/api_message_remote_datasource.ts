import { Failure, FailureApi } from "../../../../core/failures";
import { ApiClient } from "./telegram_client";
import { Update, UpdateSerializer, SendMessageParam, SendMessageParamSerializer, GetUpdatesParam, GetUpdatesParamSerializer } from "telegram-bot-ts-types";

interface ApiMessageRemoteDatasource {
    getUpdates(params: GetUpdatesParam): Promise<Update[] | Failure>;
    sendMessage(message: SendMessageParam): Promise<any | Failure>;
}

class ApiMessageRemoteDatasourceImpl implements ApiMessageRemoteDatasource {
    private client: ApiClient;

    constructor(client: ApiClient) {
        this.client = client;
    }

    public async getUpdates(params: GetUpdatesParam): Promise<Update[] | Failure> {
        let response = await this.client.execute('getUpdates', GetUpdatesParamSerializer.toFormData(params));
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

    async sendMessage(message: SendMessageParam): Promise<any | Failure> {
        let response = await this.client.execute('sendMessage', SendMessageParamSerializer.toFormData(message));
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