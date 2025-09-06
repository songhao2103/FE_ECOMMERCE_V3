import type { ICompanyItem } from "../../https/apis/companies/type";

export interface ICompaniesStore {
  list: ICompanyItem[];
  setList: (newList: ICompanyItem[]) => void;
}
