import { nanoid } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const { VITE_API_BASE_URL, VITE_API_KEY } = import.meta.env;

const withApiKey = (query) => `${query}&apiKey=${VITE_API_KEY}`;

const articlesWithIds = (articles) => articles.map((article) => ({ id: nanoid(), ...article }));

const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: VITE_API_BASE_URL }),
  endpoints: (builder) => ({
    fetchArticles: builder.query({
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
      transformResponse: (response) => {
        if (response.articles) return articlesWithIds(response.articles);
      },
    }),

    fetchPublishers: builder.query({
      query: () => withApiKey("/top-headlines/sources?"),
      transformResponse: (response) => response.sources,
    }),
  }),
});

export const { useFetchArticlesQuery, useFetchPublishersQuery } = apiSlice;

export default apiSlice;
