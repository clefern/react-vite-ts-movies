import { useEffect, useState } from 'react'
import { Movie } from '../interfaces/Movie.interface';

const useFilterMovies = (movies: Movie[]) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [searchTerm, movies]);

  const handleSearch = () => {
    const results = movies.filter(movie =>
      movie.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(results);
  };

  return { searchTerm, setSearchTerm, filteredMovies, handleSearch }
}

export default useFilterMovies