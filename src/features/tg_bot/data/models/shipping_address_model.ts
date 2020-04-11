import ShippingAddress from "../../domain/entities/shipping_address";
import { Failure, FailureWrongStructure } from "../../../../core/failures";

// https://core.telegram.org/bots/api#shippingaddress
class ShippingAddressModel extends ShippingAddress {
    static fromJson(json: any): ShippingAddressModel | Failure {
        if (!(this.checkJson(json))) {
            return new FailureWrongStructure();
        }

        return new ShippingAddressModel(
            json.country_code,
            json.state,
            json.city,
            json.street_line1,
            json.street_line2,
            json.post_code
        );
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('country_code') &&
            json.hasOwnProperty('state') &&
            json.hasOwnProperty('city') &&
            json.hasOwnProperty('street_line1') &&
            json.hasOwnProperty('street_line2') &&
            json.hasOwnProperty('post_code')
        );
    }
}

export default ShippingAddressModel;