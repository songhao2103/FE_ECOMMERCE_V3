export interface IResponse<T> {
  success: boolean;
  message: string;
  errors: string;
  data: T;
}

export interface IListDataOnResponse<T> {
  totalCount: number;
  items: T[];
  count: number;
}
