import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice.js";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
