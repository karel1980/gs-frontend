import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../service/customer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.minLength(1), Validators.maxLength(2)])
    })

  }

  onFormSubmit($event: any) {
    this.customerService
      .createCustomer(this.form.get('name').value)
      .subscribe(customer => {
      this.router.navigate([`../customer/${customer.id}`], { relativeTo: this.activatedRoute });
    })
  }
}
