import React, { type ReactNode } from "react";
interface ITitleProps {
  children: ReactNode;
  hasDot?: boolean;
}
const Title: React.FC<ITitleProps> = ({ children, hasDot = false }) => {
  return (
    <div className="text-xl font-bold text-dark mb-1 lg:mb-2 xl:mb-3 mt-2 lg:mt-3 xl:mt-4">
      {hasDot && <span className="h-4 w-4 bg-blue-700 rotate-45 mx-3"></span>}
      {children}
    </div>
  );
};

export default Title;
