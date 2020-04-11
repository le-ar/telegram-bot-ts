import ShippingAddress from "./shipping_address";

// https://core.telegram.org/bots/api#orderinfo
class OrderInfo {
    name?: string;
    phoneNumber?: string;
    email?: string;
    shippingAddress?: ShippingAddress;

    constructor(
        name?: string,
        phoneNumber?: string,
        email?: string,
        shippingAddress?: ShippingAddress
    ) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }
}

export default OrderInfo;