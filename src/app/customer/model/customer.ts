export interface Customer {
  id: string;
  name: string;
}

export interface CustomerSearchResult {
  page: number,
  numPages: number,
  customers: Customer[]
}
