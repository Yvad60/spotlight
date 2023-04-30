import { useSelector } from "react-redux";
import Hero from "../components/sections/Hero";
import MoreNews from "../components/sections/MoreNews";
import { useGetMainArticlesQuery } from "../features/api/apiSlice";

const Home = () => {
  const { queryLanguage, selectedCategory, limit, selectedPublisher, searchKeyword } = useSelector(
    (state) => state.articles
  );

  const { isError, data } = useGetMainArticlesQuery({
    country: queryLanguage,
    source: selectedPublisher?.id,
    category: selectedCategory,
    limit,
    searchKeyword,
  });

  return (
    <main className="text-yellow-950 bg-light flex-1 flex flex-col mb-12">
      {!isError && data.length > 0 ? (
        <>
          <Hero />
          <MoreNews />
        </>
      ) : (
        <p>Hello there</p>
      )}
    </main>
  );
};

export default Home;
