import { useSelector,useDispatch} from "react-redux"
import { addMovie } from "./movieSlice"
import { removeMovie } from "./movieSlice";

export const MovieList =()=>{
    const movies = useSelector((state)=>state.movies.movies);
    const dispatch = useDispatch();

    const handleRemoveMovie = (id) => {
        dispatch(removeMovie(id));
    }
    return(
        <div>
            <h1>Movie List</h1>
            {movies.map((movie)=>(
                <div key={movie.id}>{movie.name}
                <button className="btn btn-danger" onClick={()=>handleRemoveMovie(movie.id)}>Delete</button>
                </div>
            ))}
           
        </div>
    )
}