import type { IResponse } from "../../../interfaces/response";
import { httpPublic } from "../../axios/axios";
import type { ICompanyItem } from "./type";

const PREFIX_URL = "/api/company";

export const CompaniesApi = {
  getCompaniesList: (): Promise<IResponse<ICompanyItem[]>> => {
    return httpPublic.get(`${PREFIX_URL}/list`);
  },
};
