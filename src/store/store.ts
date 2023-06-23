import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";
import articlesReducer from "../features/articles/articlesSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    articles: articlesReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), apiSlice.middleware],
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
