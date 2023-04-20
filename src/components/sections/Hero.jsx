import { useGetArticlesByCountryQuery } from "../../features/api/apiSlice";
import CenterContent from "../layout/CenterContent";
import FeaturedNews from "../ui/cards/FeaturedNews";

const Hero = () => {
  const { isLoading, data } = useGetArticlesByCountryQuery("us");

  return (
    <section>
      <CenterContent>
        <h3 className="my-6 text-2xl font-bold">Featured stories</h3>
        <div className="grid w-full grid-cols-2 gap-2">
          <FeaturedNews
            variant="big"
            article={data && data[0]}
            loading={isLoading}
          />
          <FeaturedNews
            variant="wide"
            article={data && data[1]}
            loading={isLoading}
          />
          <div className="flex w-full gap-2 h-[250px]">
            <FeaturedNews
              variant="small"
              article={data && data[2]}
              loading={isLoading}
            />
            <FeaturedNews
              variant="small"
              article={data && data[4]}
              loading={isLoading}
            />
          </div>
        </div>
      </CenterContent>
    </section>
  );
};

export default Hero;
