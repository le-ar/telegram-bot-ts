import Venue from "../../domain/entities/venue";
import { FailureWrongStructure, Failure } from "../../../../core/failures";
import LocationModel from "./location_model";

// https://core.telegram.org/bots/api#venue
class VenueModel extends Venue {
    static fromJson(json: any): VenueModel | Failure {
        if (!this.checkJson(json)) {
            return new FailureWrongStructure();
        }
        let location = LocationModel.fromJson(json.location);
        if (location instanceof LocationModel) {
            return new VenueModel(
                location,
                json.title,
                json.address,
                json.foursquare_id ?? null,
                json.foursquare_type ?? null
            );
        }
    }

    private static checkJson(json: any): boolean {
        return (
            json !== null &&
            typeof json === 'object' &&
            json.hasOwnProperty('location') &&
            json.hasOwnProperty('title') &&
            json.hasOwnProperty('address') &&
            LocationModel.fromJson(json.location) instanceof LocationModel
        );
    }
}

export default VenueModel;