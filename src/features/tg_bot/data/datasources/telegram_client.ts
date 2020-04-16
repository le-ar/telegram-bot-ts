import fetch, { Response } from "node-fetch";
import { Failure, FailureApi, FailureUnauthorized } from "../../../../core/failures";
import FormData from "formdata-node";

interface ApiClient {
    token: string;
    execute(command: string, params?: { [key: string]: any }): Promise<string | Failure>;
}

class TelegramApiClient implements ApiClient {
    token: string;

    constructor(token: string) {
        this.token = encodeURI(token);
    }

    async execute(command: string, paramsFormData?: FormData): Promise<string | Failure> {
        let response = await fetch('https://api.telegram.org/bot' + this.token + '/' + command,
        {
            method: 'POST',
            headers: paramsFormData ? paramsFormData.headers : { 'Content-Type': 'application/json' },
            body: paramsFormData ? paramsFormData.stream : '',
        });

        if (response.status !== 200) {
            if (response.status === 401) {
                return new FailureUnauthorized(await response.text());
            }
            return new FailureApi(await response.text());
        }
        return await response.text();
    }

    private encodeParams(params?: { [key: string]: string }): string {
        if (typeof params === 'undefined') {
            return '';
        }

        let encodedParams = '';
        for (let param in params) {
            if (encodedParams.length > 0) {
                encodedParams += '&';
            }
            encodedParams += encodeURI(param) + '=' + encodeURI(params[param]);
        }
        return encodedParams;
    }
}

export { ApiClient, TelegramApiClient };