import { FC, ReactNode } from "react";

interface CenterContentProps{
  children : ReactNode;
  size?: string
}

const CenterContent:FC<CenterContentProps> = ({ children, size }) => {
  return (
    <div className={`w-11/12 mx-auto ${size === "medium" ? "max-w-[1200px]" : "max-w-[1300px]"} `}>
      {children}
    </div>
  );
};

export default CenterContent;
