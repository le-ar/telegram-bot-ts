import OrderInfo from "../../domain/entities/order_info";
import { Failure, FailureWrongStructure } from "../../../../core/failures";
import ShippingAddressModel from "./shipping_address_model";

// https://core.telegram.org/bots/api#orderinfo
class OrderInfoModel extends OrderInfo {
    static fromJson(json: any): OrderInfoModel | Failure {
        if (!(this.checkJson(json))) {
            return new FailureWrongStructure();
        }

        let shippingAddress = json.shipping_address ? ShippingAddressModel.fromJson(json.shipping_address) : null;
        if (!(shippingAddress instanceof ShippingAddressModel)) {
            shippingAddress = null;
        }

        if (!(shippingAddress instanceof Failure)) {
            return new OrderInfoModel(
                json.name,
                json.phone_number,
                json.email,
                shippingAddress,
            );
        }
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object'
        );
    }
}

export default OrderInfoModel;