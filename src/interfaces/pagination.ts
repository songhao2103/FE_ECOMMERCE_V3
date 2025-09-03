export interface IPagiantions {
  pageIndex: number;
  pageSize: number;
}

export interface IBaseFilters extends IPagiantions {
  searchKey: string;
}
