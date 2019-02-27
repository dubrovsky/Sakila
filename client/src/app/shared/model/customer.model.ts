import {Address} from "./address.model";
import {Store} from "./store.model";

export class Customer {

    constructor(
        public customerId?: number,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public active?: boolean,
        public address: Address = new Address(),
        public store: Store = new Store()
        ) {
    }


}
