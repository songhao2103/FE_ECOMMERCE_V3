import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { AiOutlineExclamation } from "react-icons/ai";
import { BsInfoLg } from "react-icons/bs";

export type TTypePopupAlert = "success" | "error" | "warning" | "info";

interface PopupAlertProps {
  message?: string;
  type?: TTypePopupAlert;
  onClose?: () => void;
  isLoading?: boolean;
}

const colorMap = {
  success: "#22c55e", // green-500
  error: "#ef4444", // red-500
  warning: "#eab308", // yellow-500
  info: "#3b82f6", // blue-500
};
const iconMap = {
  success: <FaCheck size={40} style={{ color: colorMap.success }} />,
  error: <IoClose size={40} style={{ color: colorMap.error }} />,
  warning: (
    <AiOutlineExclamation size={40} style={{ color: colorMap.warning }} />
  ),
  info: <BsInfoLg size={40} style={{ color: colorMap.info }} />,
};
const typeTitleMap = {
  success: "Thành công",
  error: "Thất bại",
  warning: "Cảnh báo",
  info: "Thông báo",
};

const PopupAlert: React.FC<PopupAlertProps> = ({
  message = "",
  type = "info",
  onClose = () => {},
  isLoading = false,
}) => {
  // Nếu đang load -> full-screen loader
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
        <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  // Bình thường thì show popup alert
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white px-8 py-6 rounded-xl shadow-xl text-center min-w-[350px] relative animate-fade-in">
        <div
          className="inline-flex items-center justify-center mb-4 w-[70px] h-[70px] rounded-full border-4"
          style={{ borderColor: colorMap[type] }}
        >
          {iconMap[type]}
        </div>
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          {typeTitleMap[type]}
        </h2>
        <p className="text-gray-600 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-green-500 hover:bg-green-600 transition text-white px-6 py-2 rounded-md font-medium"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default PopupAlert;
