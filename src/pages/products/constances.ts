import type {
  IFiltersGetProducts,
  TFieldSortProductList,
} from "../../https/apis/products/type";
import type { IDeviceTypeItem } from "./type";

export const DEVICE_TYPES: IDeviceTypeItem[] = [
  {
    value: 1,
    label: "Smartphone",
  },
  {
    value: 2,
    label: "Audio",
  },
  {
    value: 3,
    label: "Laptop",
  },
  {
    value: 4,
    label: "Accessories",
  },
  {
    value: 5,
    label: "Camera",
  },
  {
    value: 0,
    label: "Other",
  },
];

export const INITIAL_FILTERS_GET_PRODUCT_LIST: IFiltersGetProducts = {
  pageIndex: 6,
  pageSize: 12,
  searchKey: "",
  sortValue: 0,
  sortField: "productName",
};

interface IFieldConfig {
  value: TFieldSortProductList;
  label: string;
}
export const FIELD_SORT_PRODUCTS_CONFIG: IFieldConfig[] = [
  { value: "price", label: "Price" },
  { value: "productName", label: "Product name" },
];
