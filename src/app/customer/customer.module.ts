import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerSearchComponent} from './customer-search/customer-search.component';
import {CustomerRoutingModule} from "./customer-routing.module";
import {CustomerOverviewComponent} from './customer-overview/customer-overview.component';
import {HttpClientModule} from "@angular/common/http";
import {NewCustomerComponent} from './new-customer/new-customer.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import { ViewCustomerComponent } from './view-customer/view-customer.component';

@NgModule({
  declarations: [CustomerSearchComponent, CustomerOverviewComponent, NewCustomerComponent, ViewCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule
]
})
export class CustomerModule {
}
