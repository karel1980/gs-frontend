import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Customer, CustomerSearchResult} from "../model/customer";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private currentCustomerSubject$ = new BehaviorSubject(null);
  private currentCustomerObservable$ = this.currentCustomerSubject$.asObservable();

  constructor(private http: HttpClient) {
  }

  public searchCustomers(name: string, page: number): Observable<CustomerSearchResult> {
    return this.http.get<CustomerSearchResult>(
      '/api/customer/customer-search',
      {
        params: {name, page: '' + page}
      });
  }

  public createCustomer(name: string): Observable<Customer> {
    return this.http.post<Customer>(
      '/api/customer/customers',
      {name}
    );
  }

  loadCustomer(id: string): Observable<Customer> {
    return this.http.get<Customer>(
      `/api/customer/customers/${id}`
    ).pipe(
      tap((customer) => this.currentCustomerSubject$.next(customer))
    );
  }
}
