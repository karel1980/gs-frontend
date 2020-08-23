import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../service/customer.service";
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {Customer} from "../model/customer";

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent implements OnInit {

  customer: Customer;

  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(params => this.customerService.loadCustomer(params.id))
    ).subscribe(customer => {
      this.customer = customer;
    });
  }

}
