import { useEffect, useState } from 'react'
import { Movie } from '../interfaces/Movie.interface';
import { getMovies } from '../api';

const useFetchMovies = () => {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const response = await getMovies();
      setMovies(response);
    } catch (error) {
      setError('Failed to fetch movies');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch movies when the component mounts
  useEffect(() => {
    fetchMovies();
  }, []);
  return { movies, isLoading, error };
}

export default useFetchMovies