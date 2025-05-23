import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [
    { id: 1, name: "Interstellar" },
    { id: 2, name: "Inception" },
    { id: 3, name: "The Dark Knight" },
  ],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const newMovie = {
        id:
          state.movies.length > 0
            ? state.movies[state.movies.length - 1].id + 1
            : 1,
        name: action.payload,
      };
      state.movies.push(newMovie);
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
