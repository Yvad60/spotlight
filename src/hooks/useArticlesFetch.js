import { useSelector } from "react-redux";
import { useFetchArticlesQuery } from "../features/api/apiSlice";

const useArticlesFetch = () => {
  const { queryLanguage, selectedCategory, limit, selectedPublisher, searchKeyword } = useSelector(
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
