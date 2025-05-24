import { useState } from "react";
import { addMovie } from "./movieSlice";
import { useDispatch } from "react-redux";

export const MovieInput = () => {
  const [newMovie, setNewMovie] = useState("");
  const dispatch = useDispatch(); // ✅ this was missing

  const handleAddMovie = () => {
    if (newMovie.trim()) {
      dispatch(addMovie(newMovie));
      setNewMovie("");
    }
  };

  return (
    <>
      <input
        onChange={(e) => setNewMovie(e.target.value)}
        value={newMovie}
        placeholder="Enter a movie name"
      />
      <button onClick={handleAddMovie} className="btn btn-primary">
        Add Movie
      </button>
    </>
  );
};
