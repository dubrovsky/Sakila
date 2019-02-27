import {Address} from "./address.model";
import {Staff} from "./staff.model";

export class Store {

    constructor(
        public storeId?: number,
        public address?: Address,
        public staff?: Staff) {
    }
}