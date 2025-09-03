import type {
  IListDataOnResponse,
  IResponse,
} from "../../../interfaces/response";
import type { IFiltersGetProducts, IProductItemOnList } from "./type";
import { httpPublic } from "../../axios/axios";

const PREFIX_URL = "/api/product";
const ProductApis = {
  getProductList: (
    filters: IFiltersGetProducts
  ): Promise<IResponse<IListDataOnResponse<IProductItemOnList>>> => {
    return httpPublic.post(`${PREFIX_URL}/list`, filters);
  },
};

export default ProductApis;
