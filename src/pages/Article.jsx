import { useSelector } from "react-redux";
import CenterContent from "../components/layout/CenterContent";

const Article = () => {
  const { id, source, author, title, description, urlToImage, publishedAt } = useSelector(
    (state) => state.articles.selectedArticle
  );
  return (
    <div className="bg-light min-h-screen">
      <CenterContent>
        <div className="h-[50vh] w-full">
          <img src={urlToImage} alt="" className="w-full h-full object-cover" />
        </div>
      </CenterContent>
    </div>
  );
};

export default Article;
