import Location from "../../domain/entities/Location";
import { Failure, FailureWrongStructure } from "../../../../core/failures";

// https://core.telegram.org/bots/api#location
class LocationModel extends Location {
    static fromJson(json: any): LocationModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }

        return new LocationModel(json.longitude, json.latitude);
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('longitude') &&
            json.hasOwnProperty('latitude')
        );
    }
}

export default LocationModel;