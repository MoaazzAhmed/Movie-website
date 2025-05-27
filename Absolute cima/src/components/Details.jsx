import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../servises/servisec";

function Details() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        getMovie(id).then(res => setMovie(res.data));
    }, [id]);

    if (!movie) {
        return (
            <div className="text-center text-light mt-5">
                <p>Loading movie details...</p>
            </div>
        );
    }

    return (
        <section
            className="container text-light border border-warning border-3 rounded-4 p-4 shadow-lg bg-dark"
            style={{ marginTop: "9rem", maxWidth: "600px" }}
        >
            <h2 className="text-warning text-center mb-4">{movie.title}</h2>


            <p className="fs-5">
                <strong className="text-warning">Rating:</strong> {movie.rating} ⭐
            </p>
            <p className="fs-5">
                <strong className="text-warning">Director:</strong> {movie.director}
            </p>
            {movie.genre && (
                <p className="fs-5">
                    <strong className="text-warning">Genre:</strong> {movie.genre}
                </p>
            )}
            <p className="fs-6 mt-4">
                <strong className="text-warning fs-5">Plot:</strong> {movie.plot}
            </p>
        </section>
    );
}

export default Details;
