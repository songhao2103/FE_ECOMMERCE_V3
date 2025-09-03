import clsx from "clsx";
import React from "react";
import type { IconType } from "react-icons";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";

type TButtonArrowType = "up" | "down" | "left" | "right";

const BUTTON_ICONS: Record<TButtonArrowType, IconType> = {
  right: IoIosArrowForward,
  left: IoIosArrowBack,
  up: IoIosArrowUp,
  down: IoIosArrowDown,
};

interface IButtonArrowProps {
  type?: TButtonArrowType;
  onClick?: () => void;
  isDiscebled?: boolean;
}
const ButtonArrow: React.FC<IButtonArrowProps> = ({
  type = "right",
  onClick,
  isDiscebled = false,
}) => {
  const Icon = BUTTON_ICONS[type];
  return (
    <div
      className={clsx(
        "cursor-pointer bg-surface h-10 w-10 rounded-full flex items-center justify-center shadow-md transition-colors hover:text-surface",
        isDiscebled && "cursor-not-allowed",
        !isDiscebled && "hover:bg-secondary"
      )}
      onClick={onClick}
    >
      <Icon size={20} />
    </div>
  );
};

export default ButtonArrow;
