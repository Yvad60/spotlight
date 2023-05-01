import classNames from "classnames";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoCloseCircleSharp } from "react-icons/io5";

const SnackBar = ({ message, variant, title }) => {
  const wrapperClasses = classNames("p-3 sm:p-5 rounded flex gap-3 sm:gap-5 items-center", {
    "bg-[#cbe6f1]": variant === "info",
    "bg-[#FBE3E2]": variant === "error",
  });

  return (
    <div className="flex-1 max-w-[900px] justify-self-center items-center">
      <div className={wrapperClasses}>
        {variant === "info" && <AiOutlineInfoCircle className="text-2xl flex-shrink-0" />}
        {variant === "error" && <IoCloseCircleSharp className="text-2xl flex-shrink-0" />}
        <div>
          <h4 className="font-bold mb-1"> {title || "Heads up"} </h4>
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default SnackBar;
