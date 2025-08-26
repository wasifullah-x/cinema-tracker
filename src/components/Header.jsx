import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <div className="nav-text">
          <h1>Movie Tracker</h1>
        </div>
        <div className="nav-buttons">
          <NavLink to={"/"}>
            <button className="button">Movies</button>
          </NavLink>
          <NavLink to="/add-movie">
            <button className="button">Add Movie</button>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Header;
