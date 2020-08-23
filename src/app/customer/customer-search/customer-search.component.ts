import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomerService} from "../service/customer.service";
import {EMPTY, Observable, Subject} from "rxjs";
import {Customer, CustomerSearchResult} from "../model/customer";
import {debounceTime, finalize, switchMap, takeUntil} from "rxjs/operators";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector:  'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.scss']
})
export class CustomerSearchComponent implements OnInit, OnDestroy {

  onDestroy$ = new Subject<void>();

  loading = false;
  result$: Observable<CustomerSearchResult> = EMPTY;

  form: FormGroup;
  searchInput: FormControl;
  queryAndPageNumber$ = new Subject<{ query: string, page: number }>();
  dataSource: MatTableDataSource<Customer>;
  displayedColumns: string[] = ['name', 'advisor'];

  constructor(private formBuilder: FormBuilder, private customerService: CustomerService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      searchInput: this.formBuilder.control('', {})
    });
    this.searchInput = <FormControl>this.form.get('searchInput');

    this.searchInput.valueChanges
      .pipe(
        takeUntil(this.onDestroy$),
        debounceTime(300)
      )
      .subscribe(query => {
        this.queryAndPageNumber$.next(({query, page: 0}));
      });

    this.result$ = this.queryAndPageNumber$.pipe(
      switchMap(({query, page}) => {
        this.loading = true;
        return this.customerService.searchCustomers(query, page)
          .pipe(finalize(()  => this.loading =  false));
      })
    );

    this.result$.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(result => {
      this.dataSource.data = result.customers;
    });

    this.dataSource = new MatTableDataSource();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  onPageChange(pageEvent: PageEvent) {
    this.queryAndPageNumber$.next(({query: this.searchInput.value,  page: pageEvent.pageIndex}));
  }

  onCustomerSelected(row: Customer) {
  }
}
