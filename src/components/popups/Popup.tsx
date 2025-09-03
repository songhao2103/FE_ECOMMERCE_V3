import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5"; // 👈 icon nút đóng

interface ReusablePopupProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  width?: string;
}

const ReusablePopup: React.FC<ReusablePopupProps> = ({
  open,
  onClose,
  title,
  children,
  footer,
  width = "max-w-xl",
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  const handleClickOutside = (e: MouseEvent) => {
    if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div
        ref={dialogRef}
        className={`relative bg-white rounded-xl shadow-xl w-full ${width} max-h-screen overflow-y-auto animate-popup`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
        >
          <IoClose size={24} />
        </button>

        <div className="p-6 pt-4">
          {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
          <div>{children}</div>
          {footer && <div className="mt-6">{footer}</div>}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ReusablePopup;
