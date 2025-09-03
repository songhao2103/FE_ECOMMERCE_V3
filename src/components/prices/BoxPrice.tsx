import React from "react";
import { formatCurrencyInput } from "../../utils/transforms/formatCurrencyInput";

interface IBoxPriceProps {
  price: number;
  discount?: number;
}
const BoxPrice: React.FC<IBoxPriceProps> = ({ price, discount = 0 }) => {
  return (
    <div className="flex items-center gap-x-3">
      <p className="text-secondary">{formatCurrencyInput.display(price)}đ</p>
      <p className="line-through text-foreground-muted">
        {formatCurrencyInput.display((price * (100 - discount)) / 100)}đ
      </p>
    </div>
  );
};

export default BoxPrice;
