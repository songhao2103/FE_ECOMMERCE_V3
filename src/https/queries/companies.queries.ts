import { useQuery } from "@tanstack/react-query";
import { CompaniesApi } from "../apis/companies/companies.api";

const COMPANY_QUERY_KEYS = {
  get_company_list: "get_company_list",
};

export const useGetCompanyList = () => {
  return useQuery({
    queryKey: [COMPANY_QUERY_KEYS.get_company_list],
    queryFn: async () => {
      const response = await CompaniesApi.getCompaniesList();
      return response?.data;
    },
  });
};
