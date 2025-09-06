import { useCallback, useEffect, useState } from "react";
import BoxFilters from "../../../components/filters/BoxFilters";
import type { IFiltersGetProducts } from "../../../https/apis/products/type";
import { useGetProductList } from "../../../https/queries/product.queries";
import {
  DEVICE_TYPES,
  FIELD_SORT_PRODUCTS_CONFIG,
  INITIAL_FILTERS_GET_PRODUCT_LIST,
} from "../constances";
import type { IDeviceTypeItem } from "../type";
import { LoadingContent } from "../../../components/loader/LoadingContent";
import ProductCart, {
  type IProductInfoOnCard,
} from "../../../components/cards/ProductCart";
import { InterfaceProductExtentsions } from "../../../https/apis/products/extentsions";
import SearchInput from "../../../components/input/SearchInput";
import Pagination from "../../../components/paginations/Pagination";
import SelectTypeSort from "../../../components/selects/components/SelectTypeSort";
import CustomSelect from "../../../components/selects/CustomSelect";
import { useCompanies } from "../../../hooks/state-global/useCompanies";
import type { ICompanyItem } from "../../../https/apis/companies/type";

const List = () => {
  const [productList, setProductList] = useState<IProductInfoOnCard[]>([]);
  const { companies } = useCompanies();

  const [filters, setFilters] = useState<IFiltersGetProducts>(
    INITIAL_FILTERS_GET_PRODUCT_LIST
  );
  const { data: productData, isPending: pendingGetProductData } =
    useGetProductList(filters);

  useEffect(() => {
    if (!productData || !productData.items || productData.items.length === 0)
      return;
    const newList = productData.items.map((item) =>
      InterfaceProductExtentsions.formatToProductOnCard(item)
    );

    setProductList(newList);
  }, [productData]);

  function handleSetFilters<K extends keyof typeof filters>(
    key: K,
    value: (typeof filters)[K]
  ) {
    setFilters({ ...filters, [key]: value });
  }

  const handleSetSearchKeyDebounce = useCallback((value: string) => {
    setFilters((prev) => ({ ...prev, searchKey: value }));
  }, []);

  return (
    <div>
      <div>
        <p className="mb-2 title-h4">Filters</p>
        <div className="flex flex-wrap gap-3">
          <BoxFilters<IDeviceTypeItem>
            options={DEVICE_TYPES}
            title="Device types"
            getEqualOption={(
              option1: IDeviceTypeItem,
              option2: IDeviceTypeItem
            ) => {
              return option1.value == option2.value;
            }}
            onSubmit={(options) => {
              handleSetFilters(
                "deviceTypes",
                options.map((op) => op.value)
              );
            }}
            renderOption={(option) => option.label}
          />
          <BoxFilters<ICompanyItem>
            options={companies}
            title="Companies"
            getEqualOption={(option1: ICompanyItem, option2: ICompanyItem) => {
              return option1.id == option2.id;
            }}
            onSubmit={(options) => {
              handleSetFilters(
                "stores",
                options.map((op) => op.id)
              );
            }}
            renderOption={(option) => option.companyName}
          />
          <SearchInput onChange={handleSetSearchKeyDebounce} />
        </div>
      </div>
      <div className="mt-3">
        <p className="mb-2 title-h4">Sort</p>
        <div className="flex flex-wrap gap-x-3">
          <div className="min-w-[120px]">
            <SelectTypeSort
              onChange={(value) => handleSetFilters("sortValue", value)}
              value={filters.sortValue}
            />
          </div>

          <div className="min-w-[180px]">
            <CustomSelect
              options={FIELD_SORT_PRODUCTS_CONFIG}
              value={FIELD_SORT_PRODUCTS_CONFIG.find(
                (item) => item.value === filters.sortField
              )}
              onChange={(value) =>
                handleSetFilters("sortField", value?.value || "productName")
              }
              getLabel={(option) => option?.label || ""}
              getEqualOption={(option, value) => option?.value == value?.label}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {pendingGetProductData ? (
          <LoadingContent />
        ) : (
          productList.map((product) => (
            <ProductCart key={product.id} productInfo={product} />
          ))
        )}
      </div>

      <div className="flex justify-end">
        <Pagination
          totalPage={9}
          currentPage={filters.pageIndex}
          onChange={(page: number) => {
            handleSetFilters("pageIndex", page);
          }}
        />
      </div>
    </div>
  );
};

export default List;
