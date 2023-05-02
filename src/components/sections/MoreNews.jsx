import { useSelector } from "react-redux";
import { setMoreNewsSectionTitle } from "../../helpers/articles";
import useMainArticlesFetch from "../../hooks/useMainArticlesFetch";
import CenterContent from "../layout/CenterContent";
import NewsCardSkeleton from "../skeletons/News";
import Publishers from "../ui/Publishers";
import NewsCard from "../ui/cards/News";

const MoreNews = () => {
  const { selectedCategory, selectedPublisher, searchKeyword } = useSelector(
    (state) => state.articles
  );
  const { isFetching, data } = useMainArticlesFetch();

  return (
    <section className="mt-6 md:mt-10">
      <CenterContent>
        <h3 className="mb-6 text-xl sm:text-2xl font-bold">
          {setMoreNewsSectionTitle(selectedPublisher?.name, selectedCategory, searchKeyword)}
        </h3>
        <div className="flex gap-16">
          <div className="grid w-full grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
            {isFetching &&
              Array(6)
                .fill(0)
                .map((_item, index) => <NewsCardSkeleton key={index} />)}

            {!isFetching &&
              data &&
              data.slice(4).map((article, index) => <NewsCard article={article} key={index} />)}
          </div>

          <div className="flex-shrink-0 hidden md:block w-[300px] grow-0">
            <div className="sticky top-[134px]">
              <h3 className="pb-2 text-2xl font-semibold bg-light">Available publishers</h3>
              <Publishers />
            </div>
          </div>
        </div>
      </CenterContent>
    </section>
  );
};

export default MoreNews;
