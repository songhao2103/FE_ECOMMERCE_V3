import React, { memo } from "react";
import { FiPlus } from "react-icons/fi";
import { VscDash } from "react-icons/vsc";
import clsx from "clsx";

type SizeButton = "small" | "medium";
type Variant = "default" | "outline";

interface IToggleQuantityProps {
  currentQuantity: number;
  maxQuantity?: number;
  onChange: (quantity: number) => void;
  size?: SizeButton;
  variant?: Variant;
}

const sizeConfig: Record<SizeButton, string> = {
  small: "w-6 h-6 text-sm",
  medium: "w-8 h-8 text-base",
};

const variantConfig: Record<Variant, string> = {
  default:
    "border-2 border-surface-muted text-gray-800 hover:bg-secondary hover:text-surface hover:border-none",
  outline:
    "border border-gray-400 text-gray-800 hover:bg-gray-200 hover:text-gray-900",
};

const ToggleQuantity: React.FC<IToggleQuantityProps> = ({
  currentQuantity,
  maxQuantity,
  onChange,
  size = "medium",
  variant = "default",
}) => {
  const handleIncrease = () => {
    if (!maxQuantity || currentQuantity < maxQuantity) {
      onChange(currentQuantity + 1);
    }
  };

  const handleDecrease = () => {
    if (currentQuantity > 1) {
      onChange(currentQuantity - 1);
    }
  };

  const buttonClass = clsx(
    "flex items-center justify-center transition active:scale-95 cursor-pointer",
    sizeConfig[size],
    variantConfig[variant]
  );

  return (
    <div className="inline-flex items-center ">
      <button
        type="button"
        onClick={handleDecrease}
        className={clsx(buttonClass, "rounded-l")}
        disabled={currentQuantity <= 1}
      >
        <VscDash size={28} />
      </button>
      <div
        className={clsx(
          sizeConfig[size],
          "min-w-[3rem] text-center border-b-2 flex items-center justify-center border-t-2 border-surface-muted"
        )}
      >
        {currentQuantity}
      </div>
      <button
        type="button"
        onClick={handleIncrease}
        className={clsx(buttonClass, "rounded-r")}
        disabled={!!maxQuantity && currentQuantity >= maxQuantity}
      >
        <FiPlus />
      </button>
    </div>
  );
};

export default memo(ToggleQuantity);
