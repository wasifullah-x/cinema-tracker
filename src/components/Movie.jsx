import "./Movie.css";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  return (
    <>
      <Link to={`/movie/${movie.id}`}>
        <div className="movie">
          <div className="movie-img">
            <img src={movie.url} />
          </div>
          <div className="movie-text">{movie.name}</div>
          <div className="movie-genre"> {movie.genre}</div>
          <div className="movie-duration">{movie.duration}</div>
        </div>
      </Link>
    </>
  );
};

export default Movie;
