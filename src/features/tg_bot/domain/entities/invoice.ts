// https://core.telegram.org/bots/api#invoice
class Invoice {
    title: string;
    description: string;
    startParameter: string;
    currency: string; // https://core.telegram.org/bots/payments#supported-currencies
    totalAmount: number; // Total price in the smallest units of the currency

    constructor(
        title: string,
        description: string,
        startParameter: string,
        currency: string,
        totalAmount: number
    ) {
        this.title = title;
        this.description = description;
        this.startParameter = startParameter;
        this.currency = currency;
        this.totalAmount = totalAmount;
    }
}

export default Invoice;