import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovie } from "../store/moviesSlice.js";
import "./AddMovie.css";

const AddMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function addMovieHandler() {
    const newMovie = {
      name: document.querySelector("input[name=name]").value,
      url: document.querySelector("input[name=url").value,
      genre: document.querySelector("input[name=genre]").value,
      duration: document.querySelector("input[name=duration]").value,
      about: document.querySelector("textarea[name=about]").value,
    };
    if (
      newMovie.name &&
      newMovie.genre &&
      newMovie.duration &&
      newMovie.about
    ) {
      dispatch(addMovie(newMovie));
      document.querySelector("input[name=name]").value = "";
      document.querySelector("input[name=url]").value = "";
      document.querySelector("input[name=genre]").value = "";
      document.querySelector("input[name=duration]").value = "";
      document.querySelector("textarea[name=about]").value = "";
      alert("Movie Added Successfully");
      navigate("/");
    } else {
      alert("Please fill in mandatory details.");
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="add-movie">
          <div>
            <div className="movie-form">
              <h3>Movie Name:</h3>
              <input
                type="text"
                name="name"
                placeholder="Enter Movie Name..."
              />
            </div>
            <div className="movie-form">
              <h3>Movie Image Url:</h3>
              <input
                type="text"
                name="url"
                placeholder="Enter Movie Image Url..."
              />
            </div>
            <div className="movie-form">
              <h3>Movie Genre</h3>
              <input
                type="text"
                name="genre"
                placeholder="Enter Movie Genre..."
              />
            </div>
            <div className="movie-form">
              <h3>Movie Duration</h3>
              <input
                name="duration"
                type="text"
                placeholder="Enter Movie Duration(2h 10m)..."
              />
            </div>
          </div>
          <div className="movie-form-about">
            <h3>About</h3>
            <textarea
              name="about"
              placeholder="Tell us what movie is about..."
            ></textarea>
            <button onClick={addMovieHandler} className="add-movie-btn">
              Add Movie
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMovie;
