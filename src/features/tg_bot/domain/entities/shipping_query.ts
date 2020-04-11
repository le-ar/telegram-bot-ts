import User from "./user";
import ShippingAddress from "./shipping_address";

// https://core.telegram.org/bots/api#shippingquery
class ShippingQuery {
    id: string;
    from: User;
    invoicePayload: string;
    shippingAddress: ShippingAddress;
}

export default ShippingQuery;