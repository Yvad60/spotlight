import { useSelector } from "react-redux";
import { setHeroSectionTitle } from "../../helpers/articles";
import useArticlesFetch from "../../hooks/useMainArticlesFetch";
import CenterContent from "../layout/CenterContent";
import FeaturedNews from "../ui/cards/FeaturedNews";

const Hero = () => {
  const { selectedCategory, selectedPublisher, searchKeyword } = useSelector(
    (state) => state.articles
  );
  const { isFetching, data } = useArticlesFetch();

  const title = setHeroSectionTitle(selectedPublisher?.name, selectedCategory, searchKeyword);

  return (
    <section>
      <CenterContent>
        <h3 className="mt-4 mb-5 text-xl font-bold md:mt-7 sm:text-2xl">{title}</h3>
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-[10px]">
          <FeaturedNews variant="big" article={data && data[0]} isFetching={isFetching} />
          <FeaturedNews variant="wide" article={data && data[1]} isFetching={isFetching} />
          <div className="flex flex-col w-full col-span-1 gap-5 md:flex-row md:col-span-2 lg:col-span-1 md:gap-[10px] h-fit md:h-[250px]">
            <FeaturedNews variant="small" article={data && data[2]} isFetching={isFetching} />
            <FeaturedNews variant="small" article={data && data[3]} isFetching={isFetching} />
          </div>
        </div>
      </CenterContent>
    </section>
  );
};

export default Hero;
