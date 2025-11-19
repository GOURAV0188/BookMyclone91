import { Link } from "react-router-dom";
export default function MovieCard({ movie }) {
  return (
    <div className="card h-100">
     
      {/* <img src={movie.poster} className="card-img-top" alt={movie.title} /> */}
     <img 
  src={movie.poster} 
  alt={movie.title} 
  className="card-img-top"
  style={{ height: "300px", objectFit: "cover" }}
/>
     
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.genre} · {movie.duration}</p>
        <p>Rating: {movie.rating}/5</p>
        <Link to={`/movie/${movie.id}`} className="btn btn-primary">Book Now</Link>
      </div>
    </div>
  );
}
