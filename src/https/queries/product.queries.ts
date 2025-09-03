import ProductApis from "../apis/products/product.api";
import type { IFiltersGetProducts } from "../apis/products/type";
import { useQuery } from "@tanstack/react-query";

const PRODUCTS_QUERY_KEYS = {
  get_product_list: "get_product_list",
};

export const useGetProductList = (filters: IFiltersGetProducts) => {
  return useQuery({
    queryKey: [PRODUCTS_QUERY_KEYS.get_product_list, filters],
    queryFn: async () => {
      const response = await ProductApis.getProductList(filters);
      return response?.data;
    },
  });
};
