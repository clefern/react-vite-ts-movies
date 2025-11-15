import axios from 'axios';
import { Movie } from '../interfaces/Movie.interface';


const baseURL = 'http://localhost:3001';


export const getMovies = async (): Promise<Movie[]> => {
  const response = await axios.get<Movie[]>(`${baseURL}/movies`);
  return response.data;
}
