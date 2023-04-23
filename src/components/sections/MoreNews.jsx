import { useSelector } from "react-redux";
import { useGetMainArticlesQuery } from "../../features/api/apiSlice";
import CenterContent from "../layout/CenterContent";
import NewsCard from "../ui/cards/News";

const MoreNews = () => {
  const { queryLanguage, selectedCategory, limit } = useSelector((state) => state.articles);
  const { isFetching, data, error, isError } = useGetMainArticlesQuery({
    country: queryLanguage,
    category: selectedCategory,
    limit,
  });
  if (isError) return null;

  return (
    <section className="mt-10">
      <CenterContent>
        <h3 className="mb-6 text-2xl font-bold">More {selectedCategory} news</h3>
        <div className="flex gap-16">
          <div className="grid grid-cols-3 gap-x-8 gap-y-12 w-full">
            {data &&
              data.slice(5).map((article, index) => <NewsCard article={article} key={index} />)}
          </div>
          <div className="w-[300px] flex-shrink-0 grow-0 overflow-y-auto max-h-[600px] sticky">
            <h3 className="text-2xl font-semibold sticky top-0 bg-light pb-2">
              Available publishers
            </h3>
            <div className="mt-2 divide-y-2">
              <h3 className="py-3 px-2 hover:bg-[#f4efea]">BBC News</h3>
              <h3 className="py-3 px-2 hover:bg-[#f4efea]">BBC News</h3>
              <h3 className="py-3 px-2 hover:bg-[#f4efea]">BBC News</h3>
              <h3 className="py-3 px-2 hover:bg-[#f4efea]">BBC News</h3>
              <h3 className="py-3 px-2 hover:bg-[#f4efea]">BBC News</h3>
              <h3 className="py-3 px-2 hover:bg-[#f4efea]">BBC News</h3>
              <h3 className="py-3 px-2 hover:bg-[#f4efea]">BBC News</h3>
              <h3 className="py-3 px-2 hover:bg-[#f4efea]">BBC News</h3>
              <h3 className="py-3 px-2 hover:bg-[#f4efea]">BBC News</h3>
              <h3 className="py-3 px-2 hover:bg-[#f4efea]">BBC News</h3>
              <h3 className="py-3 px-2 hover:bg-[#f4efea]">BBC News</h3>
              <h3 className="py-3 px-2 hover:bg-[#f4efea]">BBC News</h3>
              <h3 className="py-3 px-2 hover:bg-[#f4efea]">BBC News</h3>
              <h3 className="py-3 px-2 hover:bg-[#f4efea]">BBC News</h3>
              <h3 className="py-3 px-2 hover:bg-[#f4efea]">BBC News</h3>
              <h3 className="py-3 px-2 hover:bg-[#f4efea]">BBC News</h3>
              <h3 className="py-3 px-2 hover:bg-[#f4efea]">BBC News</h3>
              <h3 className="py-3 px-2 hover:bg-[#f4efea]">BBC News</h3>
              <h3 className="py-3 px-2 hover:bg-[#f4efea]">BBC News</h3>
              <h3 className="py-3 px-2 hover:bg-[#f4efea]">BBC News</h3>
              <h3 className="py-3 px-2 hover:bg-[#f4efea]">BBC News</h3>
              <h3 className="py-3 px-2 hover:bg-[#f4efea]">BBC News</h3>
              <h3 className="py-3 px-2 hover:bg-[#f4efea]">BBC News</h3>
              <h3 className="py-3 px-2 hover:bg-[#f4efea]">BBC News</h3>
            </div>
          </div>
        </div>
      </CenterContent>
    </section>
  );
};

export default MoreNews;
