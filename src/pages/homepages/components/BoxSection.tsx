import React from "react";

interface IBoxSectionProps {
  children: React.ReactNode;
  title: string;
}
const BoxSection: React.FC<IBoxSectionProps> = ({ children, title }) => {
  return (
    <div className="px-5 mt-10 bg-background py-7">
      <div className="flex items-center justify-center gap-3 mb-5 sm:justify-start">
        <div className="w-6 h-10 rounded-sm bg-secondary"></div>
        <p className="text-secondary">{title}</p>
      </div>
      <>{children}</>
    </div>
  );
};

export default BoxSection;
