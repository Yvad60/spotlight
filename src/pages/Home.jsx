import Hero from "../components/sections/Hero";
import MoreNews from "../components/sections/MoreNews";
import SnackBar from "../components/ui/SnackBar";
import useMainArticlesFetch from "../hooks/useMainArticlesFetch";

const Home = () => {
  const { isFetching, isError, data, error } = useMainArticlesFetch();

  if (!isFetching && isError)
    return (
      <div className="flex justify-center items-center flex-1 px-3">
        <SnackBar message={error?.data?.message || error.error} variant="error" />
      </div>
    );

  if (!isFetching && data && data.length <= 0) return <p>No article found</p>;

  return (
    <main className="text-yellow-950 bg-light flex-1 flex flex-col mb-12">
      <Hero />
      <MoreNews />
    </main>
  );
};

export default Home;
