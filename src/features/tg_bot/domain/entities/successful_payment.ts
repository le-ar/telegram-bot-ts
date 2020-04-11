import OrderInfo from "./order_info";

// https://core.telegram.org/bots/api#successfulpayment
class SuccessfulPayment {
    currency: string; // https://core.telegram.org/bots/payments#supported-currencies
    totalAmount: number;
    invoicePayload: string;
    shippingOptionId?: string;
    orderInfo?: OrderInfo;
    telegramPaymentChargeId: string;
    providerPaymentChargeId: string;

    constructor(
        currency: string,
        totalAmount: number,
        invoicePayload: string,
        telegramPaymentChargeId: string,
        providerPaymentChargeId: string,
        shippingOptionId?: string,
        orderInfo?: OrderInfo
    ) {
        this.currency = currency;
        this.totalAmount = totalAmount;
        this.invoicePayload = invoicePayload;
        this.telegramPaymentChargeId = telegramPaymentChargeId;
        this.providerPaymentChargeId = providerPaymentChargeId;
        this.shippingOptionId = shippingOptionId;
        this.orderInfo = orderInfo;
    }
}

export default SuccessfulPayment;