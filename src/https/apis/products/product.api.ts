import type {
  IListDataOnResponse,
  IResponse,
} from "../../../interfaces/response";
import type {
  IFiltersGetProducts,
  IProductDetail,
  IProductItemOnList,
} from "./type";
import { httpPublic } from "../../axios/axios";

const PREFIX_URL = "/api/product";
const ProductApis = {
  getProductList: (
    filters: IFiltersGetProducts
  ): Promise<IResponse<IListDataOnResponse<IProductItemOnList>>> => {
    return httpPublic.post(`${PREFIX_URL}/list`, filters);
  },
  getProductDetail: (id: number): Promise<IResponse<IProductDetail>> => {
    return httpPublic.get(`${PREFIX_URL}/${id}`);
  },
};

export default ProductApis;
