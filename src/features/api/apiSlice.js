import { nanoid } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const { VITE_API_BASE_URL, VITE_API_KEY } = import.meta.env;

const addApiKey = (query) => `${query}&apiKey=${VITE_API_KEY}`;

const addArticlesIds = (articles) => articles.map((article) => ({ id: nanoid(), ...article }));

const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: VITE_API_BASE_URL }),
  endpoints: (builder) => ({
    getMainArticles: builder.query({
      query: (args) => {
        const { country, category, limit, source } = args;
        if (source) return addApiKey(`/top-headlines?sources=${source}&pageSize=${limit}`);
        if (category === "trending")
          return addApiKey(`/top-headlines?country=${country}&pageSize=${limit}`);
        return addApiKey(
          `/top-headlines?country=${country}&category=${category}&pageSize=${limit}`
        );
      },
      transformResponse: (response) => {
        if (response.articles) return addArticlesIds(response.articles);
      },
    }),
    getArticlesByPublisher: builder.query({
      query: (publisher) => addApiKey(`/top-headlines?sources=${publisher}`),
    }),
    getAllPublishers: builder.query({
      query: () => addApiKey("/top-headlines/sources?"),
      transformResponse: (response) => response.sources,
    }),
  }),
});

export const {
  useGetMainArticlesQuery,
  useLazyGetArticlesByPublisherQuery,
  useGetAllPublishersQuery,
} = apiSlice;

export default apiSlice;
