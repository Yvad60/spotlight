import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoCloseCircleSharp } from "react-icons/io5";

const SnackBar = ({ message, variant }) => {
  return (
    <div className="flex-1 max-w-[900px] justify-self-center mt-auto items-center">
      <div className="bg-[#cbe6f1] p-5 rounded flex gap-5 items-center">
        {variant === "info" ? (
          <AiOutlineInfoCircle className="text-2xl flex-shrink-0" />
        ) : (
          <IoCloseCircleSharp className="text-2xl flex-shrink-0" />
        )}

        <div>
          <h4 className="font-bold mb-1">Heads up</h4>
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default SnackBar;
