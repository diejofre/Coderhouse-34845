import { Link, Navigate, Route, Routes } from "react-router-dom";
import Description from "./components/Description";
import Header from "./components/Header";
import List from "./components/List";

import data from "./data.json";

const App = function () {
  const { movies, series } = data;
  return (
    <div>
      <Header />
      <main>
        <nav>
          <Link to="/movies">
            <h3>Movies</h3>
          </Link>
          <Link to="/series">
            <h3>Series</h3>
          </Link>
        </nav>
        <ul>
          <Routes>
            <Route path="/" element={<p>Bienvenidos al sitio web de ...</p>} />
            <Route path="/movies" element={<List list={movies} />} />
            <Route path="/movies/:name" element={<Description data={data} />} />
            <Route path="/series" element={<List list={series} />} />
            <Route path="/series/:name" element={<Description data={data} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ul>
      </main>
    </div>
  );
};

export default App;
