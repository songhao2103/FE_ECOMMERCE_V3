import { create } from "zustand";
import type { ICompaniesStore } from "./companies.type";
import type { ICompanyItem } from "../../https/apis/companies/type";

const useCompaniesStore = create<ICompaniesStore>((set) => ({
  list: [],
  setList: (newList: ICompanyItem[]) =>
    set(() => {
      return { list: newList };
    }),
}));

export default useCompaniesStore;
