import React from "react";

export interface ToggleSwitchProps {
  initialChecked?: boolean;
  onToggle?: (checked: boolean) => void;
  size?: "small" | "medium";
  width?: number; // override size width
  height?: number; // override size height
  colorVariant?: keyof typeof colorMap; // chọn tổ hợp màu
  // Nếu muốn override từng màu riêng:
  onColor?: string;
  offColor?: string;
  thumbColor?: string;
}

const sizeMap = {
  small: { width: 40, height: 20 },
  medium: { width: 60, height: 30 },
};

const colorMap = {
  green: { on: "#04AA6D", off: "#ccc", thumb: "#fff" },
  red: { on: "#ff4d4f", off: "#ccc", thumb: "#fff" },
  blue: { on: "#1890ff", off: "#ccc", thumb: "#fff" },
  yellow: { on: "#faad14", off: "#ccc", thumb: "#fff" },
  secondary: { on: "var(--color-secondary)", off: "#ccc", thumb: "#fff" },
} as const;

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  initialChecked = false,
  onToggle,
  size = "medium",
  width,
  height,
  colorVariant = "green",
  onColor,
  offColor,
  thumbColor,
}) => {
  const [checked, setChecked] = React.useState<boolean>(initialChecked);

  const handleToggle = () => {
    setChecked((prev) => {
      const next = !prev;
      onToggle?.(next);
      return next;
    });
  };

  // Kích thước
  const { width: baseW, height: baseH } = sizeMap[size];
  const sw = width ?? baseW;
  const sh = height ?? baseH;

  // Màu sắc
  const variant = colorMap[colorVariant];
  const bgOn = onColor ?? variant.on;
  const bgOff = offColor ?? variant.off;
  const th = thumbColor ?? variant.thumb;

  const switchStyles: React.CSSProperties = {
    position: "relative",
    width: `${sw}px`,
    height: `${sh}px`,
    background: checked ? bgOn : bgOff,
    borderRadius: `${sh / 2}px`,
    transition: "background 0.3s",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  };

  const thumbSize = sh - 4;
  const thumbStyles: React.CSSProperties = {
    position: "absolute",
    top: "2px",
    left: checked ? `${sw - thumbSize - 2}px` : "2px",
    width: `${thumbSize}px`,
    height: `${thumbSize}px`,
    background: th,
    borderRadius: "50%",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    transition: "left 0.3s",
  };

  return (
    <div
      role="switch"
      aria-checked={checked}
      onClick={handleToggle}
      style={switchStyles}
    >
      <div style={thumbStyles} />
    </div>
  );
};

export default ToggleSwitch;
