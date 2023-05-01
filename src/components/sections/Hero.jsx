import { useSelector } from "react-redux";
import { setHeroSectionTitle } from "../../helpers/articles";
import useMainArticlesFetch from "../../hooks/useMainArticlesFetch";
import CenterContent from "../layout/CenterContent";
import FeaturedNews from "../ui/cards/FeaturedNews";

const Hero = () => {
  const { selectedCategory, selectedPublisher, searchKeyword } = useSelector(
    (state) => state.articles
  );
  const { isFetching, data } = useMainArticlesFetch();

  const title = setHeroSectionTitle(selectedPublisher?.name, selectedCategory, searchKeyword);

  return (
    <section>
      <CenterContent>
        <h3 className="mt-7 mb-5 text-2xl font-bold">{title}</h3>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-5 md:gap-[10px]">
          <FeaturedNews variant="big" article={data && data[0]} isFetching={isFetching} />
          <FeaturedNews variant="wide" article={data && data[1]} isFetching={isFetching} />
          <div className="flex flex-col md:flex-row w-full gap-5 md:gap-[10px] h-fit md:h-[250px]">
            <FeaturedNews variant="small" article={data && data[2]} isFetching={isFetching} />
            <FeaturedNews variant="small" article={data && data[3]} isFetching={isFetching} />
          </div>
        </div>
      </CenterContent>
    </section>
  );
};

export default Hero;
