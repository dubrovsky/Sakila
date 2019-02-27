import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomersComponent} from "./customers/customers.component";
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {CustomerDetailComponent} from "./customer-detail/customer-detail.component";
import {CustomerDetailResolverService} from "./shared/customer-detail-resolver.service";

const routes: Routes = [{
    path: 'customers',
    component: CustomersComponent,
    children: [{
        path: '',
        component: CustomerListComponent
    },{
        path: ':id/edit',
        component: CustomerDetailComponent,
        resolve: {
            customer: CustomerDetailResolverService
        }
    },{
        path: ':id/view',
        component: CustomerDetailComponent,
        resolve: {
            customer: CustomerDetailResolverService
        }
    },{
        path: 'new',
        component: CustomerDetailComponent,
        resolve: {
            customer: CustomerDetailResolverService
        }
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomersRoutingModule {
}
