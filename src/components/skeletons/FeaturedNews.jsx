import classnames from "classnames";

const FeaturedNews = ({ variant }) => {
  const titleClasses = classnames("bg-[#b9a18d] animate-pulse", {
    "h-7 rounded": variant === "big",
    "h-5 rounded": variant === "wide",
    "h-4 rounded": variant === "small",
  });

  const wrapperClasses = classnames("relative border border-gray-300 rounded", {
    "row-span-2": variant === "big",
    "w-full h-[250px]": variant === "wide",
    "w-1/2 h-full": variant === "small",
  });

  return (
    <div className={wrapperClasses}>
      <div className="absolute px-10 mx-4 mt-5 bg-[#c8b29e] rounded-3xl shadow-md py-4 animate-pulse"></div>
      <div className="absolute flex flex-col justify-end w-full h-full px-4 py-5 bg-gradient-to-b from-transparent rounded to-yellow-900 bg-opacity-5">
        <div className="flex flex-col gap-4 mb-6">
          <div className={`w-full ${titleClasses}`}></div>
          <div className={`w-1/2 ${titleClasses}`}></div>
        </div>

        {variant === "big" && (
          <div className="flex flex-col mt-3 mb-4 gap-[10px] animate-pulse">
            <div className="w-full h-4 bg-[#a58c74] rounded"></div>
            <div className="w-10/12 h-4 bg-[#a58c74] rounded"></div>
          </div>
        )}

        <div className="flex items-center gap-7">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-[#a58c74] animate-pulse"></div>
            <div className="w-40 h-3 rounded-sm bg-[#a58c74] animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNews;
