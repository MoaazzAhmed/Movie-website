import axios from "axios";
const url = "http://localhost:3000/movies"

export async function getMovies() {
    return await axios.get(url)
}

export async function getMovie(id) {
    return await axios.get(`${url}/${id}`)
}