import { createSlice } from "@reduxjs/toolkit";

const initialState = { queryLanguage: "us" };

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setQueryLanguage: (state, action) => {
      state.queryLanguage = action.payload;
    },
  },
});

export const { setQueryLanguage } = articlesSlice.actions;
export default articlesSlice.reducer;
