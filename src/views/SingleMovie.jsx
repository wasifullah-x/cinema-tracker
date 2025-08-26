import "./SingleMovie.css";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectMovies, eraseMovie } from "../store/moviesSlice.js";

const SingleMovie = () => {
  const movies = useSelector(selectMovies);
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch();
  const movie = movies.filter((movie) => movie.id == id)[0];

  function eraseButtonHandler(id) {
    if (confirm("Are you sure you want to delete this movie?")) {
      dispatch(eraseMovie(id));
      navigate("/");
    }
  }

  return (
    <>
      <div className="container">
        <Link to={"/"}>
          <button className="back-btn">Go Back</button>
        </Link>

        {movie ? (
          <div>
            <div className="movie-page">
              <div className="movie-img">
                <img src={movie.url} />
              </div>
              <div className="movie-info">
                <div className="movie-title">
                  <h1>{movie.name}</h1>
                </div>
                <p className="movie-duration">{movie.duration}</p>
                <button className="watch-now">Watch Now</button>
                <a
                  onClick={() => eraseButtonHandler(movie.id)}
                  className="erase"
                >
                  Erase Movie
                </a>
              </div>
            </div>
            <div className="movie-explanation">
              <p className="movie-detail">
                <b>{movie.name} </b>
                {movie.about}
              </p>
            </div>
            <div className="movie-review">
              <h3>Add Review </h3>
              <textarea
                name="review"
                placeholder="Enter your review here..."
              ></textarea>
              <button className="submit-btn">Submit Review</button>
            </div>
          </div>
        ) : (
          <div>
            <p>Sorry no book found with this id.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleMovie;
