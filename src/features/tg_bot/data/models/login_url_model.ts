import LoginUrl from "../../domain/entities/login_url";
import { Failure, FailureWrongStructure } from "../../../../core/failures";

// https://core.telegram.org/bots/api#loginurl
class LoginUrlModel extends LoginUrl {
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
}

export default LoginUrlModel;