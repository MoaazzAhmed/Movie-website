import { Link } from "react-router-dom";
import Upcoming from "./Upcoming";
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark py-4 fixed-top px-5 d-flex justify-content-between">
                <Link className="fw-bold fs-3 text-warning text-decoration-none" to="/">🎥 Absolute Cima</Link>
                <div className="d-flex">
                    <Link className="fw-bold fs-6 ms-5 text-warning nav-link" to="new">New Movies</Link>
                    <Link className="fw-bold fs-6 ms-5 text-warning nav-link" to="upcoming">Upcoming Movies</Link>
                    <Link className="fw-bold fs-6 ms-5 text-warning nav-link" to="contact">contact</Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;