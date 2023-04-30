import { useSelector } from "react-redux";
import { useGetMainArticlesQuery } from "../features/api/apiSlice";

const useMainArticlesFetch = () => {
  const { queryLanguage, selectedCategory, limit, selectedPublisher, searchKeyword } = useSelector(
    (state) => state.articles
  );

  const { data, isError, isFetching, isLoading, isSuccess, error } = useGetMainArticlesQuery({
    country: queryLanguage,
    source: selectedPublisher?.id,
    category: selectedCategory,
    limit,
    searchKeyword,
  });

  return { data, isError, isFetching, isLoading, isSuccess, error };
};

export default useMainArticlesFetch;
