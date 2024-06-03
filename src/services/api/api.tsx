import axios from "axios"

export const fetchMovies = async () => {
    const response = await axios.get('http://localhost:4001/movies');
    return response.data;
  }

  export async function getMovieById(id: string) {
    const response = await axios.get(`http://localhost:4001/movies/${id}`);
    return response.data;
  }