import { useMemo } from "react";
import type { TSORT_VALUE } from "../../../interfaces/queries";
import CustomSelect from "../CustomSelect";
import { TYPES_SORT } from "../constance";

interface ISelectTypeSortProps {
  onChange: (value: TSORT_VALUE) => void;
  value: TSORT_VALUE;
}

const SelectTypeSort: React.FC<ISelectTypeSortProps> = ({
  onChange,
  value,
}) => {
  const sortItem = useMemo(() => {
    return TYPES_SORT.find((item) => item.value === value);
  }, [value]);

  return (
    <div className="w-full">
      <CustomSelect
        options={TYPES_SORT}
        getLabel={(option) => option?.label || ""}
        getEqualOption={(option, values) => option?.value === values?.value}
        value={sortItem}
        onChange={(option) => onChange(option?.value as TSORT_VALUE)}
      />
    </div>
  );
};

export default SelectTypeSort;
