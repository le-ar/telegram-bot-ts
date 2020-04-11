import LoginUrl from "../../domain/entities/login_url";
import { Failure, FailureWrongStructure } from "../../../../core/failures";
import Serializable from "../../../../core/serializable";

// https://core.telegram.org/bots/api#loginurl
class LoginUrlModel extends LoginUrl implements Serializable {
    static fromJson(json: any): LoginUrlModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        return new LoginUrlModel(
            json.url,
            json.forward_text ?? null,
            json.bot_username ?? null,
            json.request_write_access ?? null
        );
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('url')
        );
    }

    toJsonString(): string {
        return JSON.stringify(this.toJsonObject());
    }

    toJsonObject(): { [key: string]: any; } {
        let json = { url: this.url };
        if (typeof this.forwardText === 'string') {
            json['forward_text'] = this.forwardText;
        }
        if (typeof this.botUsername === 'string') {
            json['bot_username'] = this.botUsername;
        }
        if (typeof this.requestWriteAccess === 'boolean') {
            json['request_write_access'] = this.requestWriteAccess;
        }

        return json;
    }
}

export default LoginUrlModel;