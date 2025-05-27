import { useEffect, useState } from "react";
import { getMovies } from "../servises/servisec";
import { Link } from "react-router-dom";

function Home() {
    const [movies, setMovies] = useState([]);
    const [searchedMovie, setSearchedMovie] = useState("");
    const [resultedMovies, setResultedMovies] = useState([]);

    useEffect(() => {
        getMovies().then(res => setMovies(res.data));
    }, []);

    useEffect(() => {
        const result = movies.filter(movie =>
            movie.title.toLowerCase().includes(searchedMovie.toLowerCase())
        );
        setResultedMovies(result);
    }, [searchedMovie, movies]);

    return (
        <div className="container mt-5">
            <header className="text-center mb-4">
                <h1 className="text-warning fw-bold">
                    Welcome to <span className="fst-italic">Absolute Cima</span>
                </h1>
                <p className="text-light fs-5">Search for your favorite movie</p>
                <input
                    type="search"
                    placeholder="Type a movie title..."
                    className="form-control w-75 mx-auto mt-3"
                    onChange={(e) => setSearchedMovie(e.target.value)}
                />
            </header>

            <section className="mt-4">
                {resultedMovies.length > 0 ? (
                    resultedMovies.map(movie => (
                        <Link
                            key={movie.id}
                            to={`details/${movie.id}`}
                            className="alert alert-warning text-dark text-decoration-none d-block w-75 mx-auto my-3"
                        >
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="mb-0">{movie.title}</h5>
                                <span className="badge bg-dark text-warning ms-3">
                                    ⭐ {movie.rating}
                                </span>
                            </div>
                            {movie.genre && (
                                <span className="badge bg-secondary mt-2 d-inline-block">{movie.genre}</span>
                            )}
                        </Link>
                    ))
                ) : searchedMovie ? (
                    <p className="text-center text-light mt-4">No matching movies found.</p>
                ) : null}
            </section>
        </div>
    );
}

export default Home;
