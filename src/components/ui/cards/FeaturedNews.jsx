import classnames from "classnames";
import { FaUser } from "react-icons/fa";
import {
  normalizeDate,
  removePublisherFromTitle,
} from "../../../helpers/articles";
import FeaturedNewsSkeleton from "../../skeletons/FeaturedNews";

const FeaturedNews = ({ variant, article, loading }) => {
  if (loading) return <FeaturedNewsSkeleton variant={variant} />;
  const { source, author, title, description, url, urlToImage, publishedAt } =
    article;
  const titleClasses = classnames("font-semibold mb-3", {
    "text-4xl": variant === "big",
    "text-3xl": variant === "wide",
    "text-xl line-clamp-3": variant === "small",
  });

  const wrapperClasses = classnames("relative", {
    "row-span-2": variant === "big",
    "w-full h-[250px]": variant === "wide",
    "w-1/2 h-full": variant === "small",
  });

  const footerClasses = classnames("flex gap-6 text-yellow-50 line-clamp-1", {
    "text-sm line-clamp-1": variant === "small",
  });

  return (
    <div className={wrapperClasses}>
      <h3 className="absolute px-3 mx-4 mt-5 font-semibold text-white bg-yellow-600 rounded-full shadow-md py-[6px]">
        {source.name}
      </h3>
      <div className="absolute flex flex-col justify-end w-full h-full px-4 py-5 bg-gradient-to-b from-transparent to-yellow-900 bg-opacity-5 text-light">
        <h3 className={titleClasses}>{removePublisherFromTitle(title)}</h3>

        {variant === "big" && (
          <p className="mb-4 text-lg text-yellow-50">{description}</p>
        )}

        <div className={footerClasses}>
          <h4 className="flex gap-1 line-clamp-1">
            <FaUser className="text-xl" />
            {author || "Annonymous"}
          </h4>
          <h4>{normalizeDate(publishedAt)}</h4>
        </div>
      </div>
      <img
        src={urlToImage}
        alt="article cover"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default FeaturedNews;
