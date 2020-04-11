// https://core.telegram.org/bots/api#contact
class Contact {
    phoneNumber: string;
    firstName: string;
    lastName?: string;
    userId?: number;
    vcard?: string;

    constructor(
        phoneNumber: string,
        firstName: string,
        lastName?: string,
        userId?: number,
        vcard?: string
    ) {
        this.phoneNumber = phoneNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userId = userId;
        this.vcard = vcard;
    }
}

export default Contact;