import SuccessfulPayment from "../../domain/entities/successful_payment";
import { Failure, FailureWrongStructure } from "../../../../core/failures";
import OrderInfoModel from "./order_info_model";

// https://core.telegram.org/bots/api#successfulpayment
class SuccessfulPaymentModel extends SuccessfulPayment {
    static fromJson(json: any): SuccessfulPaymentModel | Failure {
        if (!(this.checkJson(json))) {
            return new FailureWrongStructure();
        }

        let orderInfo = json.order_info ? OrderInfoModel.fromJson(json.order_info) : null;
        if (!(orderInfo instanceof OrderInfoModel)) {
            orderInfo = null;
        }

        if (!(orderInfo instanceof Failure)) {
            return new SuccessfulPaymentModel(
                json.currency,
                json.total_amount,
                json.invoice_payload,
                json.telegram_payment_charge_id,
                json.provider_payment_charge_id,
                json.shipping_option_id ?? null,
                orderInfo,
            );
        }
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('currency') &&
            json.hasOwnProperty('total_amount') &&
            json.hasOwnProperty('invoice_payload') &&
            json.hasOwnProperty('telegram_payment_charge_id') &&
            json.hasOwnProperty('provider_payment_charge_id')
        );
    }
}

export default SuccessfulPaymentModel;