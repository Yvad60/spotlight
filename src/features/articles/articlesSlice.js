import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  queryLanguage: "us",
  selectedCategory: "trending",
  limit: 11,
  selectedPublisher: null,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setQueryLanguage: (state, action) => {
      state.queryLanguage = action.payload;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setSelectedArticle: (state, action) => {
      state.selectedArticle = action.payload;
    },
    selectPublisher: (state, action) => {
      console.log("i am here with this action ", action);
      state.selectedPublisher = action.payload;
    },
  },
});

export const { setQueryLanguage, setCategory, setSelectedArticle, selectPublisher } =
  articlesSlice.actions;
export default articlesSlice.reducer;
