import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import moviesData from "../data/movies.json";

export default function Booking() {
  const { id } = useParams();
  const location = useLocation();
  const time = new URLSearchParams(location.search).get('time');
  const movie = moviesData.find(m => m.id == id);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const pricePerSeat = 250;

  const handleSeatSelect = (seat) => {
    if (seat.available) {
      setSelectedSeats(seats => seats.includes(seat.seatNumber)
        ? seats.filter(s => s !== seat.seatNumber)
        : [...seats, seat.seatNumber]);
    }
  };

  const handleConfirm = () => {
    alert(`Booking confirmed for ${selectedSeats.length} seat(s).\nTotal: ₹${selectedSeats.length * pricePerSeat}`);
    setSelectedSeats([]);
  };

  return (
    <div className="container mt-4">
      <h2>Booking for {movie.title}</h2>
      <p>Showtime: {time}</p>
      <h5>Select Seats:</h5>
      <div className="d-flex flex-wrap mb-3">
        {movie.seats.map(seat => (
          <button
            key={seat.seatNumber}
            className={`btn m-2 ${seat.available ? 'btn-success' : 'btn-secondary'}`}
            disabled={!seat.available}
            onClick={() => handleSeatSelect(seat)}
          >
            {seat.seatNumber} {selectedSeats.includes(seat.seatNumber) ? "(Selected)" : ""}
          </button>
        ))}
      </div>
      <h6>Total Price: ₹{selectedSeats.length * pricePerSeat}</h6>
      <button className="btn btn-primary" disabled={!selectedSeats.length} onClick={handleConfirm}>Confirm Booking</button>
    </div>
  );
}
