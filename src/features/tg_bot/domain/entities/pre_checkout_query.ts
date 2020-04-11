import User from "./user";
import OrderInfo from "./order_info";

// https://core.telegram.org/bots/api#precheckoutquery
class PreCheckoutQuery {
    id: string;
    from: User;
    currency: string; // https://core.telegram.org/bots/payments#supported-currencies
    totalAmount: number;
    invoicePayload: string;
    shippingOptionId?: string;
    orderInfo?: OrderInfo;
}

export default PreCheckoutQuery;