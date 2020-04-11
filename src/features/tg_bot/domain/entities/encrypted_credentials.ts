// https://core.telegram.org/bots/api#encryptedpassportelement
class EncryptedCredentials {
    data: string;
    hash: string;
    secret: string;

    constructor(
        data: string,
        hash: string,
        secret: string
    ) {
        this.data = data;
        this.hash = hash;
        this.secret = secret;
    }
}

export default EncryptedCredentials;