import { useEffect, useState } from "react";
import BoxFilters from "../../../components/filters/BoxFilters";
import type { IFiltersGetProducts } from "../../../https/apis/products/type";
import { useGetProductList } from "../../../https/queries/product.queries";
import { DEVICE_TYPES, INITIAL_FILTERS_GET_PRODUCT_LIST } from "../constances";
import type { IDeviceTypeItem } from "../type";
import { LoadingContent } from "../../../components/loader/LoadingContent";
import ProductCart, {
  type IProductInfoOnCard,
} from "../../../components/cards/ProductCart";
import { InterfaceProductExtentsions } from "../../../https/apis/products/extentsions";
import SearchInput from "../../../components/input/SearchInput";
import Pagination from "../../../components/paginations/Pagination";

const List = () => {
  const [productList, setProductList] = useState<IProductInfoOnCard[]>([]);
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

  return (
    <div>
      <div>
        <p className="mb-2 title-h4">Filters</p>
        <div className="flex flex-wrap">
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
              console.log(options);
            }}
            renderOption={(option) => option.label}
          />
          <SearchInput />
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

      <div>
        <Pagination
          totalPage={9}
          currentPage={filters.pageIndex}
          onChange={(page: number) => {
            setFilters({ ...filters, pageIndex: page });
          }}
        />
      </div>
    </div>
  );
};

export default List;
