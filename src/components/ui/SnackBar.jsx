import { IoCloseCircleSharp } from "react-icons/io5";

const SnackBar = ({ message }) => {
  return (
    <div className="flex-1 mx-auto max-w-[800px] justify-self-center mt-auto flex items-center">
      <div className="bg-[#ad2725d0] p-5 mx-3 rounded text-light flex gap-5 items-center">
        <IoCloseCircleSharp className="text-2xl flex-shrink-0" />
        <div>
          <h4 className="font-bold mb-1">Heads up</h4>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default SnackBar;
