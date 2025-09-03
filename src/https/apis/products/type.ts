import type { IBaseFilters } from "../../../interfaces/pagination";

export interface IFiltersGetProducts extends IBaseFilters {
  deviceType?: number;
  stores?: number;
}

export interface IProductItemOnList {
  id: number;
  productName: string;
  description: string;
  price: number;
  discount: number;
  companyName: string;
  storeName: string;
  imageDefault: string;
  images: string[];
  quantitySold: number;
}
