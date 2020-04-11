import EncryptedPassportElement from "./encrypted_passport_element";
import EncryptedCredentials from "./encrypted_credentials";

// https://core.telegram.org/bots/api#passportdata
class PassportData {
    data: EncryptedPassportElement[];
    credentials: EncryptedCredentials;

    constructor(
        data: EncryptedPassportElement[],
        credentials: EncryptedCredentials
    ) {
        this.data = data;
        this.credentials = credentials;
    }
}

export default PassportData;