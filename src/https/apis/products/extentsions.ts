import type { IProductInfoOnCard } from "../../../components/cards/ProductCart";
import type { IProductItemOnList } from "./type";

export const InterfaceProductExtentsions = {
  formatToProductOnCard: (product: IProductItemOnList): IProductInfoOnCard => {
    return {
      id: product.id,
      productName: product.productName,
      productImage: product.imageDefault,
      discount: product.discount,
      price: product.price,
      rating: 0,
      sold: product.quantitySold,
    };
  },
};
