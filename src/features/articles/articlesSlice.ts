import { createSlice } from "@reduxjs/toolkit";

const initialState: ArticleSliceState = {
  queryLanguage: "us",
  selectedCategory: "trending",
  limit: 10,
  selectedPublisher: null,
  searchKeyword: "",
  selectedArticle: null,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setQueryLanguage: (state, action) => {
      state.queryLanguage = action.payload;
      state.searchKeyword = initialState.searchKeyword;
      state.selectedPublisher = initialState.selectedPublisher;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.searchKeyword = initialState.searchKeyword;
      state.selectedPublisher = initialState.selectedPublisher;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setSelectedArticle: (state, action) => {
      state.selectedArticle = action.payload;
    },
    selectPublisher: (state, action) => {
      state.selectedPublisher = action.payload;
      state.searchKeyword = initialState.searchKeyword;
    },
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
      state.selectedPublisher = initialState.selectedPublisher;
    },
  },
});

export const {
  setQueryLanguage,
  setCategory,
  setSelectedArticle,
  selectPublisher,
  setSearchKeyword,
} = articlesSlice.actions;

export default articlesSlice.reducer;
