import { createSlice } from "@reduxjs/toolkit";

const initialState = { queryLanguage: "us", selectedCategory: "trending" };

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
  },
});

export const { setQueryLanguage, setCategory } = articlesSlice.actions;
export default articlesSlice.reducer;
