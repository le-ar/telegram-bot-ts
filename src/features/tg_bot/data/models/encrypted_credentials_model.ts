import EncryptedCredentials from "../../domain/entities/encrypted_credentials";
import { Failure, FailureWrongStructure } from "../../../../core/failures";

// https://core.telegram.org/bots/api#encryptedpassportelement
class EncryptedCredentialsModel extends EncryptedCredentials {
    static fromJson(json: any): EncryptedCredentialsModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        return new EncryptedCredentialsModel(
            json.data,
            json.hash,
            json.secret
        );
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('data') &&
            json.hasOwnProperty('hash') &&
            json.hasOwnProperty('secret')
        );
    }
}

export default EncryptedCredentialsModel;