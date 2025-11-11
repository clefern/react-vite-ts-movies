import axios from 'axios';
import { Movie } from '../interfaces/Movie.interface';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const getMovies = async (): Promise<Movie[]> => {
  const response = await api.get('/movies');
  return response.data;
}
