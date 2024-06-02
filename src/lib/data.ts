/* eslint-disable no-useless-concat */
import axios from 'axios';

export async function getGenres() {
  const response = await axios.get('http://localhost:4001/genres');
  return response.data;
}

export async function getMovies() {
  const response = await axios.get('http://localhost:4001/movies');
  return response.data;
}

export async function getMovieById(id: string) {
  const response = await axios.get(`http://localhost:4001/movies/${id}`);
  return response.data;
}

export async function postMovie(movie: any) {
//   delete movie?.id;
  const response = await axios.post('http://localhost:4001/movies', movie);
  return response.data;
}

export async function patchMovie(movie: { id: string }) {
  const response = await axios.patch('http://localhost:4001/movies' + `/${movie.id}`, movie);
  return response.data;
}

export async function deleteMovie(id: string) {
  const response = await axios.delete('http://localhost:4001/movies' + `/${id}`);
  return response;
}

export async function getSeries() {
  const response = await axios.get('http://localhost:4001/series');
  return response.data;
}

export async function getSearchedTerm(term: string) {
  const response = await axios.get(`http://localhost:4001/search/${term}`);
  return response.data;
}


export async function uploadImage(file: any) {
  const formData = new FormData();
  formData.append('file', file);
  // const config = {
  //     headers: {
  //         Authorization: token,
  //         'Content-Type': 'multipart/form-data'
  //     }
  // }
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post('http://localhost:4001/upload', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
}