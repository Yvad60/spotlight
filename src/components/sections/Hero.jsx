import { useSelector } from "react-redux";
import { useGetArticlesByCountryQuery } from "../../features/api/apiSlice";
import CenterContent from "../layout/CenterContent";
import FeaturedNews from "../ui/cards/FeaturedNews";

const Hero = () => {
  const { queryLanguage } = useSelector((state) => state.articles);
  const { isFetching, data } = useGetArticlesByCountryQuery(queryLanguage);

  return (
    <section>
      <CenterContent>
        <h3 className="my-6 text-2xl font-bold">Featured stories</h3>
        <div className="grid w-full grid-cols-2 gap-[10px]">
          <FeaturedNews
            variant="big"
            article={data && data[0]}
            isLoading={isFetching}
          />
          <FeaturedNews
            variant="wide"
            article={data && data[1]}
            isLoading={isFetching}
          />
          <div className="flex w-full gap-[10px] h-[250px]">
            <FeaturedNews
              variant="small"
              article={data && data[2]}
              isLoading={isFetching}
            />
            <FeaturedNews
              variant="small"
              article={data && data[4]}
              isLoading={isFetching}
            />
          </div>
        </div>
      </CenterContent>
    </section>
  );
};

export default Hero;
