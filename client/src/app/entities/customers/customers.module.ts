import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomersRoutingModule} from './customers-routing.module';
import {CustomersComponent} from './customers/customers.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerDetailComponent} from './customer-detail/customer-detail.component';
import {
    MatButtonModule, MatCardModule, MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule, MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule
} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [CustomersComponent, CustomerListComponent, CustomerDetailComponent],
    imports: [
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatCardModule,
        ReactiveFormsModule,
        MatSelectModule,
        CommonModule,
        CustomersRoutingModule
    ]
})
export class CustomersModule {
}
