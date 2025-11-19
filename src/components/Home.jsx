import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import moviesData from "../data/movies.json";

export default function Home() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    setMovies(moviesData);
  }, []);

  const filteredMovies = movies.filter(m =>
    m.title.toLowerCase().includes(search.toLowerCase()) &&
    (genre === "" || m.genre === genre)
  );

  return (
    <div className="container mt-4">
      <h2>Now Showing</h2>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Search by title"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <select className="form-select mb-4" value={genre} onChange={e => setGenre(e.target.value)}>
        <option value="">All Genres</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Drama">Drama</option>
        {/* Add more genres as needed */}
      </select>
      <div className="row">
        {filteredMovies.map(movie => (
          <div className="col-md-4 mb-3" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
