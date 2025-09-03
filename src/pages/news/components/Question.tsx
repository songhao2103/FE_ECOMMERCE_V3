import { type ReactNode } from "react";

const Question = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-blue-600 italic font-normal text-lg">{children}</div>
  );
};

export default Question;
