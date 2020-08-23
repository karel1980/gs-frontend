import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerOverviewComponent} from "./customer-overview/customer-overview.component";
import {NewCustomerComponent} from "./new-customer/new-customer.component";
import {ViewCustomerComponent} from "./view-customer/view-customer.component";


const routes: Routes = [
  {
    path: '', pathMatch: 'exact', redirectTo: 'overview'
  },
  {
    path: 'overview', component: CustomerOverviewComponent
  },
  {
    path: 'new', component: NewCustomerComponent
  },
  {
    path: 'customer/:id', component: ViewCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
