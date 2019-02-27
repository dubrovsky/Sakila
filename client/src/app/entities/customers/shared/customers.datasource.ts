import {DataSource} from "@angular/cdk/table";
import {CollectionViewer} from "@angular/cdk/collections";
import {CustomerService} from "./customer.service";
import {BehaviorSubject, Observable, of} from "rxjs";
import {catchError, finalize} from "rxjs/operators";
import {Customer} from "../../../shared/model/customer.model";
import {Page} from "../../../shared/model/page.model";

export class CustomersDataSource implements DataSource<Customer> {

    private customersSubject = new BehaviorSubject<Customer[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    // private customersCountSubject = new BehaviorSubject<number>(0);

    public loading$ = this.loadingSubject.asObservable();

    // public customersCount$ = this.customersCountSubject.asObservable();
    public customersCount: number = 0;

    constructor(private customerService: CustomerService) {
    }

    loadCustomers(filter = '', sort = 'lastUpdate,desc', pageIndex = 0, pageSize = 10) {

        this.loadingSubject.next(true);

        this.customerService.query(filter, sort, pageIndex, pageSize).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
            .subscribe((page: Page<Customer>) => {
                // this.customersCountSubject.next(page.totalElements);
                this.customersCount = page.totalElements;
                this.customersSubject.next(page.content);
            });

    }

    connect(collectionViewer: CollectionViewer): Observable<Customer[] | ReadonlyArray<Customer>> {
        return this.customersSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.customersSubject.complete();
        this.loadingSubject.complete();
        // this.customersCountSubject.complete();
    }
}
