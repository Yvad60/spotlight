import sample from "/images/sample.jpg";
import { FaUser } from "react-icons/fa";

const News = () => {
  return (
    <div className="flex flex-col">
      <img src={sample} alt="Article cover" className="w-full" />
      <h4 className="font-bold text-lg mt-3 leading-7">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus cum
        nostrum ipsam.
      </h4>
      <div className="flex justify-between items-end text-yellow-900 text-sm mt-1">
        <p className="flex items-center gap-2">
          <FaUser className="inline" />
          <span className="mt-1">Dan Abramov</span>
        </p>
        <span>12 August 2022</span>
      </div>
    </div>
  );
};

export default News;
