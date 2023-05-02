import { unfoundArticlesMessage } from "../common/articles";
import Hero from "../components/sections/Hero";
import MoreNews from "../components/sections/MoreNews";
import SnackBar from "../components/ui/SnackBar";
import useArticlesFetch from "../hooks/useMainArticlesFetch";

const Home = () => {
  const { isFetching, isError, data, error } = useArticlesFetch();

  if (!isFetching && isError)
    return (
      <div className="flex items-center justify-center flex-1 px-3">
        <SnackBar message={error?.data?.message || error.error} variant="error" />
      </div>
    );

  if (!isFetching && data && data.length <= 0)
    return (
      <div className="flex items-center justify-center flex-1 px-3">
        <SnackBar message={unfoundArticlesMessage} variant="info" />
      </div>
    );

  return (
    <main className="flex flex-col flex-1 mb-12 text-yellow-950 bg-light">
      <Hero />
      <MoreNews />
    </main>
  );
};

export default Home;
