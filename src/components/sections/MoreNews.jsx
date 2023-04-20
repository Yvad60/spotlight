import CenterContent from "../layout/CenterContent";
import NewsCard from "../ui/cards/News";

const MoreNews = () => {
  return (
    <section className="mt-10">
      <CenterContent>
        <h3 className="mb-3 text-2xl font-bold">More news</h3>
        <div className="flex gap-16">
          <div className="grid grid-cols-3 gap-x-9 gap-y-12">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
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
