import Contact from "../../domain/entities/Contact";
import { Failure, FailureWrongStructure } from "../../../../core/failures";

// https://core.telegram.org/bots/api#contact
class ContactModel extends Contact {
    static fromJson(json: any): ContactModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        return new ContactModel(
            json.phone_number,
            json.first_name,
            json.last_name ?? null,
            json.user_id ?? null,
            json.vcard ?? null
        );
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('phone_number') &&
            json.hasOwnProperty('first_name')
        );
    }
}

export default ContactModel;