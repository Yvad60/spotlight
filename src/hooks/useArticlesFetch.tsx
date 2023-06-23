import { useFetchArticlesQuery } from "../features/api/apiSlice";
import { useAppSelector } from "./redux";

const useArticlesFetch = () => {
  const { queryLanguage, selectedCategory, limit, selectedPublisher, searchKeyword } = useAppSelector(
    (state) => state.articles
  );

  const { data, isError, isFetching, isLoading, isSuccess, error } = useFetchArticlesQuery({
    country: queryLanguage,
    source: selectedPublisher?.id,
    category: selectedCategory,
    limit,
    searchKeyword,
  });

  return { data, isError, isFetching, isLoading, isSuccess, error };
};

export default useArticlesFetch;
