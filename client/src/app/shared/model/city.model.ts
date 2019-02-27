import {Country} from "./country.model";

export class City {

    constructor(
        public cityId?: number,
        public city?: string,
        public country: Country = new Country()) {
    }
}
