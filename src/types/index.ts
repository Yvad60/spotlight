/* eslint-disable @typescript-eslint/no-unused-vars */
interface ArticleDto {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface Article extends ArticleDto {
  id: string;
}

interface Publisher {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

interface ArticleSliceState {
  queryLanguage: "us" | "fr";
  selectedCategory: "trending" | "health" | "business" | "sports" | "technology";
  limit: 10;
  selectedPublisher: null | Publisher;
  searchKeyword: string;
  selectedArticle: null | Article;
}
