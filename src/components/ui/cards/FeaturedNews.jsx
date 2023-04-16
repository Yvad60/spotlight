import classnames from "classnames";
import { FaUser } from "react-icons/fa";
import sample from "/images/sample.jpg";

const FeaturedNews = ({ variant }) => {
  const titleClasses = classnames("font-semibold mb-3", {
    "text-4xl": variant === "big",
    "text-3xl": variant === "wide",
    "text-xl": variant === "small",
  });

  const wrapperClasses = classnames("relative", {
    "row-span-2": variant === "big",
    "w-full h-[250px]": variant === "wide",
    "w-1/2 h-full": variant === "small",
  });

  const footerClasses = classnames("flex gap-6 text-yellow-50", {
    "text-sm": variant === "small",
  });

  return (
    <div className={wrapperClasses}>
      <h3 className="absolute px-3 mx-4 mt-5 font-semibold text-white bg-yellow-600 rounded-full shadow-md py-[6px]">
        CNN News
      </h3>
      <div className="absolute flex flex-col justify-end w-full h-full px-4 py-5 bg-gradient-to-b from-transparent to-yellow-900 bg-opacity-20 text-light">
        <h3 className={titleClasses}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          cumque?
        </h3>

        {variant === "big" && (
          <p className="mb-4 text-lg text-yellow-50">
            At least four people were killed and several others injured in an
            avalanche that struck the French Alps over the weekend.
          </p>
        )}

        <div className={footerClasses}>
          <h4 className="flex gap-1">
            <FaUser className="text-xl" />
            Dan Abramov
          </h4>
          <h4>10 August 2021</h4>
        </div>
      </div>
      <img
        src={sample}
        alt="article cover"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default FeaturedNews;
