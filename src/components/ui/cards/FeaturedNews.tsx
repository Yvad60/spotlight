import classnames from "classnames";
import { FC } from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { setSelectedArticle } from "../../../features/articles/articlesSlice";
import { normalizeAuthors } from "../../../helpers/articles";
import FeaturedNewsSkeleton from "../../skeletons/FeaturedNewsCard";
import fallbackArticleCover from "/images/default-news-cover.jpg";
import { useAppDispatch } from "../../../hooks/redux";

interface FeaturedNewsProps {
  variant: "big" | "wide" | "small";
  article: Article | undefined;
  isFetching: boolean;
}

const FeaturedNews: FC<FeaturedNewsProps> = ({ variant, article, isFetching }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const titleClasses = classnames("font-semibold mb-3 line-clamp-3", {
    "text-xl sm:text-2xl md:text-4xl": variant === "big",
    "text-xl sm:text-2xl md:text-3xl": variant === "wide",
    "text-xl": variant === "small",
  });

  const wrapperClasses = classnames("relative cursor-pointer select-none", {
    "h-[220px] md:h-auto lg:row-span-2 lg:h-[510px]": variant === "big",
    "w-full h-[220px] md:h-[250px]": variant === "wide",
    "h-[220px] w-full lg:w-1/2 md:h-full": variant === "small",
  });

  const footerClasses = classnames(
    "flex items-center justify-between md:justify-normal md:gap-6 text-yellow-50 line-clamp-1",
    {
      "text-sm line-clamp-1": variant === "small",
    }
  );

  if (isFetching || !article)
    return <FeaturedNewsSkeleton variant={variant} styles={wrapperClasses} />;

  const { id, source, author, title, description, urlToImage, publishedAt } = article;

  const viewArticle = () => {
    dispatch(setSelectedArticle(article));
    navigate(`/article/${id}`);
  };

  return (
    <div className={wrapperClasses} onClick={viewArticle}>
      <h3 className="absolute px-3 mx-4 mt-3 text-sm font-semibold text-white bg-yellow-600 rounded-full shadow-md sm:text-base sm:mt-5 py-[3px] sm:py-[6px]">
        {source.name}
      </h3>
      <div className="absolute flex flex-col justify-end w-full h-full px-4 py-5 rounded-sm bg-gradient-to-b from-transparent to-yellow-900 bg-opacity-5 text-light">
        <h3 className={titleClasses}>{title}</h3>

        {variant === "big" && (
          <p className="hidden mb-4 text-lg lg:block text-yellow-50">{description}</p>
        )}

        <div className={footerClasses}>
          <h4 className="flex items-center gap-1 line-clamp-1">
            <FaUser className="text-base sm:text-xl" />
            {(author && normalizeAuthors(author)) || "Anonymous"}
          </h4>
          <h4 className="text-sm sm:text-base">{publishedAt}</h4>
        </div>
      </div>
      <img
        src={urlToImage || fallbackArticleCover}
        alt="article cover"
        className="object-cover w-full h-full rounded-sm"
      />
    </div>
  );
};

export default FeaturedNews;
