import { nanoid } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { normalizeDate, removePublisherFromTitle } from "../../helpers/articles";
interface QueryArgs {
  country: "us" | "fr";
  category: "trending" | "health" | "business" | "sports" | "technology";
  limit: 10;
  source: string;
  searchKeyword: string;
}

interface ArticleApiResponse {
  status: string;
  totalResults: number;
  articles: ArticleDto[];
}

interface PublishersApiResponse {
  status: string;
  totalResults: number;
  sources: Publisher[];
}

const { VITE_API_BASE_URL, VITE_API_KEY } = import.meta.env;

const withApiKey = (query: string) => `${query}&apiKey=${VITE_API_KEY}`;

const normalizeArticles = (articles: ArticleDto[]): Article[] =>
  articles.map((article) => ({
    ...article,
    id: nanoid(),
    title: removePublisherFromTitle(article.title),
    publishedAt: normalizeDate(article.publishedAt),
  }));

const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: VITE_API_BASE_URL }),
  endpoints: (builder) => ({
    fetchArticles: builder.query<Article[], QueryArgs>({
      query: (args) => {
        const { country, category, limit, source, searchKeyword } = args;
        if (searchKeyword)
          return withApiKey(`/everything?q=${searchKeyword}&searchIn=title&sortBy=popularity`);
        if (source) return withApiKey(`/top-headlines?sources=${source}&pageSize=${limit}`);
        if (category === "trending")
          return withApiKey(`/top-headlines?country=${country}&pageSize=${limit}`);
        return withApiKey(
          `/top-headlines?country=${country}&category=${category}&pageSize=${limit}`
        );
      },
      transformResponse: (response: ArticleApiResponse) => {
        return normalizeArticles(response.articles);
      },
    }),

    fetchPublishers: builder.query({
      query: () => withApiKey("/top-headlines/sources?"),
      transformResponse: (response: PublishersApiResponse) => response.sources,
    }),
  }),
});

export const { useFetchArticlesQuery, useFetchPublishersQuery } = apiSlice;

export default apiSlice;
