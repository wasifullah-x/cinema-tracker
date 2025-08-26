import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddMovie from "./views/AddMovie";
import MovieList from "./views/MovieList";
import SingleMovie from "./views/SingleMovie";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/movie/:id" element={<SingleMovie />} />
          <Route index element={<MovieList />} />
          <Route path="/add-movie" element={<AddMovie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
