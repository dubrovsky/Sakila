import {CountryCity} from "./country-city.model";

export class Country {

    constructor(
        public countryId?: number,
        public country?: string,
        public cities?: CountryCity[]) {
    }
}
