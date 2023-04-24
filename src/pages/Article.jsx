import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import CenterContent from "../components/layout/CenterContent";
import { countReadingMinutes, normalizeDate, removePublisherFromTitle } from "../helpers/articles";
import fallbackArticleCover from "/images/default-news-cover.jpg";

const Article = () => {
  const { id, source, author, title, description, urlToImage, publishedAt, content } = useSelector(
    (state) => state.articles.selectedArticle
  );
  const readingMinutes = content ? countReadingMinutes(content) : null;
  return (
    <div className="flex-1 mt-8 bg-light">
      <CenterContent>
        <div className="w-full h-[50vh]">
          <img
            src={urlToImage || fallbackArticleCover}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="w-11/12 mt-5 text-5xl font-semibold">{removePublisherFromTitle(title)}</h1>
        <div className="flex justify-between mt-8">
          <div className="flex items-center gap-3">
            <FaUser className="text-[40px]" />
            <div className="flex flex-col justify-center">
              <h5 className="font-semibold">{author || "Anonymous"}</h5>
              <h5 className="font-semibold">{source.name}</h5>
            </div>
          </div>
          <div className="text-right">
            <p>{normalizeDate(publishedAt)}</p>
            {readingMinutes && (
              <p>
                {readingMinutes <= 1 ? "Less than a minute read" : `${readingMinutes} minutes read`}
              </p>
            )}
          </div>
        </div>
        <div className="mt-6">
          <p>{description || content}</p>
        </div>
      </CenterContent>
    </div>
  );
};

export default Article;
