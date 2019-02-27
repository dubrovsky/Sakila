import {Injectable} from '@angular/core';
import {Customer} from "../../../shared/model/customer.model";
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {EMPTY, Observable, of} from "rxjs";
import {CustomerService} from "./customer.service";
import {mergeMap, take} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class CustomerDetailResolverService implements Resolve<Customer> {

    constructor(
        private customerService: CustomerService,
        private router: Router,
        private route: ActivatedRoute) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Customer> | Promise<Customer> | Customer {
        const id = route.paramMap.get('id') ? +route.paramMap.get('id') : null;

        if (id) {
            return this.customerService.find(id).pipe(
                take(1),
                mergeMap(customer => {
                    if (customer) {
                        return of(customer);
                    } else { // id not found
                        this.router.navigate(['../'], { relativeTo: this.route });
                        return EMPTY;
                    }
                })
            );
        }

        return of(new Customer());
    }
}
