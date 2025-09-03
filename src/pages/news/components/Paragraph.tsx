import React, { type ReactNode } from "react";
interface IParagraphProps {
  children: ReactNode;
  hasDot?: boolean;
}
const Paragraph: React.FC<IParagraphProps> = ({ children, hasDot = false }) => {
  return (
    <div className="font-normal my-[3px] lg:mb-[6px] xl:mb-[9px] flex items-center">
      {hasDot && (
        <div className="h-[6px] w-[6px] bg-blue-500 rotate-45 mx-3"></div>
      )}
      {children}
    </div>
  );
};

export default Paragraph;
