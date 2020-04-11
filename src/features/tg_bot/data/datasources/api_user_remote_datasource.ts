import User from "../../domain/entities/user";
import { Failure, FailureApi } from "../../../../core/failures";
import fetch from 'node-fetch';
import { ApiClient } from "./telegram_client";
import UserModel from "../models/user_model";

interface ApiUserRemoteDatasource {
    getMe(): Promise<User | Failure>
}

class ApiUserRemoteDatasourceImpl implements ApiUserRemoteDatasource {
    private client: ApiClient;

    constructor(client: ApiClient) {
        this.client = client;
    }

    private checkResponse(response: string): boolean {
        try {
            let jsonResponse = JSON.parse(response);
            return (typeof jsonResponse === 'object' && 'ok' in jsonResponse && 'result' in jsonResponse && jsonResponse.ok);
        } catch (e) { }

        return false;
    }

    async getMe(): Promise<User | Failure> {
        let response = await this.client.execute('getMe');
        if (response instanceof Failure) {
            return response;
        }

        if (!this.checkResponse(response)) {
            return new FailureApi();
        }

        let jsonResponse = JSON.parse(response)['result'];
        let userModel = UserModel.fromJson(jsonResponse);
        return userModel;
    }
}

export { ApiUserRemoteDatasource, ApiUserRemoteDatasourceImpl };