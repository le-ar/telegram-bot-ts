import Invoice from "../../domain/entities/invoice";
import { Failure, FailureWrongStructure } from "../../../../core/failures";

// https://core.telegram.org/bots/api#invoice
class InvoiceModel extends Invoice {
    static fromJson(json: any): InvoiceModel | Failure {
        if (!(this.checkJson(json))) {
            return new FailureWrongStructure();
        }

        return new InvoiceModel(
            json.title,
            json.description,
            json.start_parameter,
            json.currency,
            json.total_amount
        );
    }
    
    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('title') &&
            json.hasOwnProperty('description') &&
            json.hasOwnProperty('start_parameter') &&
            json.hasOwnProperty('currency') &&
            json.hasOwnProperty('total_amount')
        );
    }
}

export default InvoiceModel;