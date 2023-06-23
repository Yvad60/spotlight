import { FC, useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { Navigate } from "react-router-dom";
import CenterContent from "../components/layout/CenterContent";
import SnackBar from "../components/ui/SnackBar";
import { missingContentMessage } from "../constants/articles";
import { countReadingMinutes } from "../helpers/articles";
import { useAppSelector } from "../hooks/redux";
import fallbackArticleCover from "/images/default-news-cover.jpg";

const Article: FC = () => {
  const { id, source, author, title, description, url, urlToImage, publishedAt, content } =
    useAppSelector((state) => state.articles.selectedArticle || ({} as Article));
  const readingMinutes = content ? countReadingMinutes(content) : null;

  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const toggleMessage = () => setIsMessageVisible(!isMessageVisible);

  if (!id) return <Navigate to="/" />;

  return (
    <div className="flex-1 mt-4 mb-12 bg-light">
      <CenterContent size="medium">
        <div className="w-full h-[50vw] md:h-[50vh]">
          <img
            src={urlToImage || fallbackArticleCover}
            alt=""
            className="object-cover object-top w-full h-full rounded-sm"
          />
        </div>
        <h1 className="w-11/12 mt-5 text-xl font-semibold sm:text-2xl md:text-5xl">{title}</h1>
        <div className="mt-4 md:mt-5">
          <p>{description || content}</p>
        </div>
        <div className="flex flex-col justify-between mt-4 md:flex-row">
          <div className="flex items-center gap-3">
            <FaUser className="flex-shrink-0 text-2xl sm:text-3xl text-zinc-600" />
            <div className="flex flex-col justify-center overflow-hidden">
              <h5 className="w-full font-semibold">{author || "Anonymous"}</h5>
              <h5 className="font-semibold">{source.name}</h5>
            </div>
          </div>
          <div className="mt-3 md:mt-0 md:text-right">
            <p>{publishedAt}</p>
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
          <div className="mt-3 cursor-pointer flex text-[13px] w-fit" onClick={toggleMessage}>
            <IoMdArrowDropright
              className={`text-2xl transition-transform duration-150 ease-in ${
                isMessageVisible ? "rotate-90" : ""
              }`}
            />
            <p className="border-b-2 border-current border-dotted">
              Why you can't read the article here?
            </p>
          </div>
          <div
            className={`mt-4 transition-all  ${
              isMessageVisible ? "opacity-100 duration-300 h-auto absolute" : "opacity-0 h-0"
            }`}
          >
            <SnackBar variant="info" message={missingContentMessage} />
          </div>
        </div>
      </CenterContent>
    </div>
  );
};

export default Article;
