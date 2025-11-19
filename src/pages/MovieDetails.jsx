import { useParams, useNavigate } from "react-router-dom";
import moviesData from "../data/movies.json";
export default function MovieDetails() {
  const { id } = useParams();
  const movie = moviesData.find(m => m.id == id);
  const navigate = useNavigate();
  
  return (
    <div className="container mt-4">
      <img src={movie.poster} alt={movie.title} className="img-fluid mb-2" style={{maxWidth: '300px'}} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Genre: {movie.genre}</p>
      <p>Duration: {movie.duration}</p>
      <p>Rating: {movie.rating}</p>
      <h4>Showtimes:</h4>
      {movie.showtimes.map(st => (
        <button key={st.time} className="btn btn-outline-primary m-1"
         onClick={() => navigate(`/booking/${movie.id}?time=${st.time}`)}>
          {st.theater} - {st.time}
        </button>
      ))}
      <br/><h5>Reviews</h5>
      <ul>
        {movie.reviews.map((review, idx) => (<li key={idx}>{review}</li>))}
      </ul>
    </div>
  );
}
