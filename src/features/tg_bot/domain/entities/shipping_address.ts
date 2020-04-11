// https://core.telegram.org/bots/api#shippingaddress
class ShippingAddress {
    countryCode: string; // ISO 3166-1 alpha-2 country code
    state: string;
    city: string;
    streetLine1: string;
    streetLine2: string;
    postCode: string;

    constructor(
        countryCode: string,
        state: string,
        city: string,
        streetLine1: string,
        streetLine2: string,
        postCode: string
    ) {
        this.countryCode = countryCode;
        this.state = state;
        this.city = city;
        this.streetLine1 = streetLine1;
        this.streetLine2 = streetLine2;
        this.postCode = postCode;
    }
}

export default ShippingAddress;