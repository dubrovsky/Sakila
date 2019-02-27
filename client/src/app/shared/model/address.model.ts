import {City} from "./city.model";

export class Address {

    constructor(
        public addressId?: number,
        public address?: string,
        public address2?: string,
        public district?: string,
        public postalCode?: string,
        public phone?: string,
        public city: City = new City()) {
    }
}
