import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../Components/movieSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer, },
});
