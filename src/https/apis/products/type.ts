import type { IBaseFilters, ISortFilters } from "../../../interfaces/queries";

export type TFieldSortProductList = "productName" | "price";

export interface IFiltersGetProducts
  extends IBaseFilters,
    ISortFilters<TFieldSortProductList> {
  deviceTypes?: number[];
  stores?: number[];
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

export interface IImageOfProduct {
  id: number;
  colorName?: string;
  colorCode?: string;
  url: string;
  quantity?: number;
}

export interface IProductDetail {
  id: number;
  productName: string;
  description: string;
  discount?: number;
  price: number;
  images: IImageOfProduct[];
}
