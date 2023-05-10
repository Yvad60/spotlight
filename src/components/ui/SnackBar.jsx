import classNames from "classnames";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoCloseCircleSharp } from "react-icons/io5";

const SnackBar = ({ message, variant, title }) => {
  const wrapperClasses = classNames("p-3 sm:p-5 rounded flex gap-3 sm:gap-5 items-center", {
    "bg-[#cbe6f1]": variant === "info",
    "bg-[#FBE3E2]": variant === "error",
  });

  return (
    <div className="items-center flex-1 max-w-[900px] justify-self-center">
      <div className={wrapperClasses}>
        {variant === "info" && <AiOutlineInfoCircle className="flex-shrink-0 text-2xl" />}
        {variant === "error" && <IoCloseCircleSharp className="flex-shrink-0 text-2xl" />}
        <div>
          <h4 className="mb-1 font-bold"> {title || "Heads up"} </h4>
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default SnackBar;
