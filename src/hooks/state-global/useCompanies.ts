import { useCallback, useEffect, useState } from "react";
import { CompaniesApi } from "../../https/apis/companies/companies.api";
import useCompaniesStore from "../../store/companies/store";
import type { ICompanyItem } from "../../https/apis/companies/type";

const getList = async (): Promise<ICompanyItem[]> => {
  const response = await CompaniesApi.getCompaniesList();
  return response?.data || [];
};

export const useCompanies = () => {
  const { list, setList } = useCompaniesStore();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [hasFetched, setHasFetched] = useState(false);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getList();
      setList(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
      setHasFetched(true);
    }
  }, [setList]);

  useEffect(() => {
    if (!hasFetched) {
      void refetch();
    }
  }, [hasFetched, refetch]);

  return { companies: list, refetch, loading, error } as const;
};
