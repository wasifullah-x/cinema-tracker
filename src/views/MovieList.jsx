import Header from "../components/Header";
import Movie from "../components/Movie";
import { useSelector } from "react-redux";
import { selectMovies } from "../store/moviesSlice.js";
import "./MovieList.css";

const MovieList = () => {
  const movies = useSelector(selectMovies);

  return (
    <>
      <Header />
      <div className="container">
        <div className="movie-list">
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MovieList;
