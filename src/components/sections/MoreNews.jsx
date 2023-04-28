import { useDispatch, useSelector } from "react-redux";
import { useGetAllPublishersQuery, useGetMainArticlesQuery } from "../../features/api/apiSlice";
import { selectPublisher } from "../../features/articles/articlesSlice";
import { capitalize, getCountryFromCode, getLanguageFromCode } from "../../helpers/articles";
import CenterContent from "../layout/CenterContent";
import NewsCardSkeleton from "../skeletons/News";
import NewsCard from "../ui/cards/News";

const MoreNews = () => {
  const dispatch = useDispatch();
  const { queryLanguage, selectedCategory, limit, selectedPublisher } = useSelector(
    (state) => state.articles
  );
  const { isFetching, data, error, isError } = useGetMainArticlesQuery({
    country: queryLanguage,
    source: selectedPublisher,
    category: selectedCategory,
    limit,
  });

  const { data: publishers, error: pubError } = useGetAllPublishersQuery();
  if (isError) return null;

  const handleSelectPublisher = (publisher) => {
    console.log(publisher);
    dispatch(selectPublisher(publisher));
  };

  const resetPublishers = (event) => {
    event.stopPropagation();
    dispatch(selectPublisher(""));
  };

  return (
    <section className="mt-10">
      <CenterContent>
        <h3 className="mb-6 text-2xl font-bold">More {selectedCategory} news</h3>
        <div className="flex gap-16">
          <div className="grid w-full grid-cols-3 gap-x-8 gap-y-12">
            {isFetching &&
              Array(6)
                .fill(0)
                .map((_item, index) => <NewsCardSkeleton key={index} />)}

            {!isFetching &&
              data &&
              data.slice(5).map((article, index) => <NewsCard article={article} key={index} />)}
          </div>

          <div className="sticky flex-shrink-0 w-[300px] grow-0">
            <h3 className="pb-2 text-2xl font-semibold bg-light">Available publishers</h3>
            <div className="mt-2 divide-y-2 divide-zinc-300 overflow-y-auto max-h-[600px] relative scrollbar-thumb-[#A27848] scrollbar-track-[#e5d3c1] scrollbar-thin scrollbar-thumb-rounded-full scrollbar-w-8">
              {publishers &&
                publishers.map((publisher) => (
                  <div
                    onClick={() => handleSelectPublisher(publisher.id)}
                    key={publisher.id}
                    className={`pt-2 pb-3 px-2 cursor-pointer text-slate-600 hover:bg-[#f1eee8] ${
                      publisher.id === selectedPublisher &&
                      "bg-[#eae6df] sticky w-full top-0 bottom-0"
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="flex-1">
                        <h3 className="font-semibold">{publisher.name}</h3>
                        <div className="flex gap-2 mt-1 text-[11px]">
                          <p className="px-2 border rounded-full py-[2px] border-slate-400">
                            {capitalize(publisher.category)}
                          </p>
                          <p className="px-2 border rounded-full py-[2px] border-slate-400">
                            {getCountryFromCode(publisher.country)}
                          </p>
                          <p className="px-2 border rounded-full py-[2px] border-slate-400">
                            {getLanguageFromCode(publisher.language)}
                          </p>
                        </div>
                      </div>
                      {publisher.id === selectedPublisher && (
                        <button
                          onClick={resetPublishers}
                          className="px-3 border rounded-md absolute right-0 mr-2 py-[2px] bg-[#ec888f] text-light text-[11px]"
                        >
                          Reset
                        </button>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </CenterContent>
    </section>
  );
};

export default MoreNews;
