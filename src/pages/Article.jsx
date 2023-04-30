import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import CenterContent from "../components/layout/CenterContent";
import SnackBar from "../components/ui/SnackBar";
import { countReadingMinutes, normalizeDate, removePublisherFromTitle } from "../helpers/articles";
import fallbackArticleCover from "/images/default-news-cover.jpg";

const Article = () => {
  const { id, source, author, title, description, url, urlToImage, publishedAt, content } =
    useSelector((state) => state.articles.selectedArticle || {});
  const readingMinutes = content ? countReadingMinutes(content) : null;

  const [isMessageVisible, setIsMessageVisible] = useState(false);

  if (!id) return <Navigate to="/" />;

  return (
    <div className="flex-1 mt-4 mb-12 bg-light">
      <CenterContent size="medium">
        <div className="w-full bg-red-500 h-[50vw] md:h-[50vh]">
          <img
            src={urlToImage || fallbackArticleCover}
            alt=""
            className="object-cover object-top w-full h-full rounded-sm"
          />
        </div>
        <h1 className="w-11/12 mt-5 text-xl sm:text-2xl font-semibold md:text-5xl">
          {removePublisherFromTitle(title)}
        </h1>
        <div className="mt-4 md:mt-5">
          <p>{description || content}</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-4">
          <div className="flex items-center gap-3">
            <FaUser className="text-2xl sm:text-3xl text-zinc-600 flex-shrink-0" />
            <div className="flex flex-col justify-center overflow-hidden">
              <h5 className="font-semibold w-full">{author || "Anonymous"}</h5>
              <h5 className="font-semibold">{source.name}</h5>
            </div>
          </div>
          <div className="mt-3 md:mt-0 md:text-right">
            <p>{normalizeDate(publishedAt)}</p>
            {readingMinutes && (
              <p>
                {readingMinutes <= 1 ? "Less than a minute read" : `${readingMinutes} minutes read`}
              </p>
            )}
          </div>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-block px-6 py-2 mt-10 font-semibold rounded-md bg-primary text-light"
        >
          View orginal source
        </a>
        <div className={`transition-all duration-300 ${isMessageVisible && "relative mb-28"}`}>
          <p
            className="mt-2 border-b-2 border-current border-dotted cursor-pointer text-[13px] w-fit"
            onMouseOver={() => setIsMessageVisible(true)}
          >
            <IoMdArrowDropright />
            Why you can't read the article here?
          </p>
          <div
            className={`mt-4 transition-all  ${
              isMessageVisible ? "opacity-100 duration-300 h-auto absolute" : "opacity-0 h-0"
            }`}
          >
            <SnackBar
              variant="info"
              message="This page is supposed to display the full text of the article, however, the news API used for this project does not deliver the full text of the article. That’s why you are only seeing an article summary. Clicking the 'Read full article' button will redirect you to the orginal article"
            />
          </div>
        </div>
      </CenterContent>
    </div>
  );
};

export default Article;
