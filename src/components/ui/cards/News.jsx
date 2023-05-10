import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedArticle } from "../../../features/articles/articlesSlice";
import { normalizeAuthors } from "../../../helpers/articles";
import fallbackArticleCover from "/images/default-news-cover.jpg";

const News = ({ article }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { source, author, title, urlToImage, publishedAt } = article;

  const viewArticle = () => {
    dispatch(setSelectedArticle(article));
    navigate(`/article/${article.id}`);
  };

  return (
    <div className="flex flex-col cursor-pointer" onClick={viewArticle}>
      <h3 className="absolute px-2 py-1 mx-3 mt-3 text-sm font-semibold text-white bg-yellow-600 rounded-full shadow-md">
        {source.name}
      </h3>
      <img
        src={urlToImage || fallbackArticleCover}
        alt="Article cover"
        className="object-cover w-full rounded-sm shadow-sm h-[192px]"
      />
      <h4 className="mt-3 text-lg font-bold leading-7 line-clamp-3">{title}</h4>
      <div className="flex items-end justify-between mt-1 text-sm text-yellow-900">
        <p className="flex items-center gap-2">
          <FaUser className="inline" />
          <span className="mt-1">{(author && normalizeAuthors(author)) || "Anonymous"}</span>
        </p>
        <span>{publishedAt}</span>
      </div>
    </div>
  );
};

export default News;
