export interface IPagiantions {
  pageIndex: number;
  pageSize: number;
}

export interface IBaseFilters extends IPagiantions {
  searchKey: string;
}

export const SORT_VALUE = {
  INCREASE: 1,
  DECREASE: -1,
  NOT_SORT: 0,
} as const;

export type TSORT_VALUE = (typeof SORT_VALUE)[keyof typeof SORT_VALUE];

export interface ISortFilters<T> {
  sortValue: TSORT_VALUE;
  sortField: T;
}
