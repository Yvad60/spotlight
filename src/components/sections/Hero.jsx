import CenterContent from "../layout/CenterContent";
import FeaturedNews from "../ui/cards/FeaturedNews";

const Hero = () => {
  return (
    <section>
      <CenterContent>
        <h3 className="mt-5 mb-3 text-2xl font-bold">Featured stories</h3>
        <div className="grid w-full grid-cols-2 gap-2">
          <FeaturedNews variant="big" />
          <FeaturedNews variant="wide" />

          <div className="flex w-full gap-2 h-[250px]">
            <FeaturedNews variant="small" />
            <FeaturedNews variant="small" />
          </div>
        </div>
      </CenterContent>
    </section>
  );
};

export default Hero;
