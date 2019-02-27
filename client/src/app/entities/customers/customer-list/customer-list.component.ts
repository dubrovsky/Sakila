import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CustomersDataSource} from "../shared/customers.datasource";
import {CustomerService} from "../shared/customer.service";
import {MatDialog, MatPaginator, MatSnackBar, MatSort} from "@angular/material";
import {debounceTime, distinctUntilChanged, filter, map} from "rxjs/operators";
import {fromEvent, merge} from "rxjs";
import {Customer} from "../../../shared/model/customer.model";
import {ActivatedRoute, Router} from "@angular/router";
import {DialogComponent} from "../../../shared/alert/dialog/dialog.component";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app-customer-list',
    templateUrl: './customer-list.component.html',
    styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

    displayedColumns: string[] = ['firstName', 'lastName', 'address', 'postalCode', 'phone', 'city', 'country', 'storeId'];
    dataSource: CustomersDataSource;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild('input') input: ElementRef;
    private selectedRow: Customer;

    constructor(
        private customerService: CustomerService,
        private router: Router,
        private route: ActivatedRoute,
        public dialog: MatDialog,
        private snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.dataSource = new CustomersDataSource(this.customerService);
        this.dataSource.loadCustomers();
    }

    ngAfterViewInit() {
        fromEvent(this.input.nativeElement, 'keyup')
            .pipe(
                map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
                filter(text => text.length > 2),
                debounceTime(1000),
                distinctUntilChanged()
            )
            .subscribe(() => {
                this.paginator.pageIndex = 0;
                this.selectedRow = undefined;
                this.loadCustomersPage();
            });

        this.sort.sortChange.subscribe(() => {
            this.paginator.pageIndex = 0
        });

        merge(this.sort.sortChange, this.paginator.page).subscribe(() => {
            this.loadCustomersPage();
            this.selectedRow = undefined;
        });
        // this.dataSource.customersCount$.subscribe(count => this.paginator.length = count)
    }

    loadCustomersPage() {
        this.dataSource.loadCustomers(
            this.input.nativeElement.value,
            this.sort.active + ',' + this.sort.direction,
            // 'customerId,asc',
            this.paginator.pageIndex,
            this.paginator.pageSize);
    }

    onRowClicked(row) {
        this.selectedRow = row;
    }

    onNewBtnClick() {
        this.router.navigate(['./new'], {relativeTo: this.route});
    }

    onEditBtnClick() {
        if (this.selectedRow) {
            this.router.navigate(['./', this.selectedRow.customerId, 'edit'], {relativeTo: this.route});
        }
    }

    onDeleteBtnClick() {
        const dialogRef = this.dialog.open(DialogComponent, {
            data: {
                title: 'Delete',
                content: 'Are you sure?'
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.customerService.delete(this.selectedRow.customerId).subscribe(
                    () => this.loadCustomersPage(),
                    (error: HttpErrorResponse) => {
                        this.snackBar.open(error.error, 'Ok');
                    });
            }
        });
    }
}
