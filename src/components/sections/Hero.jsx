import { useSelector } from "react-redux";
import { useGetMainArticlesQuery } from "../../features/api/apiSlice";
import { setHeroSectionTitle } from "../../helpers/articles";
import CenterContent from "../layout/CenterContent";
import SnackBar from "../ui/SnackBar";
import FeaturedNews from "../ui/cards/FeaturedNews";

const Hero = () => {
  const { queryLanguage, selectedCategory, limit, selectedPublisher, searchKeyword } = useSelector(
    (state) => state.articles
  );
  const { isFetching, data, error, isError } = useGetMainArticlesQuery({
    country: queryLanguage,
    category: selectedCategory,
    limit,
    source: selectedPublisher?.id,
    searchKeyword,
  });

  const title = setHeroSectionTitle(selectedPublisher?.name, selectedCategory, searchKeyword);

  if (isError)
    return (
      <div className="flex justify-center">
        <SnackBar message={error?.data?.message || error.error} />
      </div>
    );

  return (
    <section>
      <CenterContent>
        <h3 className="mt-7 mb-5 text-2xl font-bold">{title}</h3>
        <div className="grid w-full grid-cols-2 gap-[10px]">
          <FeaturedNews variant="big" article={data && data[0]} isFetching={isFetching} />
          <FeaturedNews variant="wide" article={data && data[1]} isFetching={isFetching} />
          <div className="flex w-full gap-[10px] h-[250px]">
            <FeaturedNews variant="small" article={data && data[2]} isFetching={isFetching} />
            <FeaturedNews variant="small" article={data && data[4]} isFetching={isFetching} />
          </div>
        </div>
      </CenterContent>
    </section>
  );
};

export default Hero;
