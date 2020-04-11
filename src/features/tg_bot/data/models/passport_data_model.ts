import PassportData from "../../domain/entities/passport_data";
import { Failure, FailureWrongStructure } from "../../../../core/failures";
import EncryptedPassportElementModel from "./encrypted_passport_element_model";
import EncryptedCredentialsModel from "./encrypted_credentials_model";

// https://core.telegram.org/bots/api#passportdata
class PassportDataModel extends PassportData {
    static fromJson(json: any): PassportDataModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        let data: EncryptedPassportElementModel[] = [];
        if (Array.isArray(json.data)) {
            for (let encryptedPassportElement of json.data) {
                let encryptedPassportElementModel = EncryptedPassportElementModel.fromJson(encryptedPassportElement);
                if (encryptedPassportElementModel instanceof EncryptedPassportElementModel) {
                    data.push(encryptedPassportElementModel);
                }
            }
        } else {
            data = [];
        }

        let credentials = json.credentials ? EncryptedCredentialsModel.fromJson(json.credentials) : null;
        if (!(credentials instanceof EncryptedCredentialsModel)) {
            credentials = null;
        }

        if (!(credentials instanceof Failure)) {
            return new PassportDataModel(
                data,
                credentials
            );
        }
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('data') &&
            json.hasOwnProperty('credentials')
        );
    }
}

export default PassportDataModel;