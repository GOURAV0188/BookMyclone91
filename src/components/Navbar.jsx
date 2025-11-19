import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">BookMyShow Mini</Link>
      <div>
        {/* <Link className="btn btn-outline-light mx-2" to="/admin">Admin Panel</Link> */}
      </div>
    </nav>
  );
}
