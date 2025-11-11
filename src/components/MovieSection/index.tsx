import Fieldset from '../FieldSet'
import InputText from '../InputText'
import Button from '../Button'
import { FaSearch } from 'react-icons/fa'
import styles from './MovieSection.module.css'
import MovieList from '../MovieList'
import { useState } from 'react'
import { Movie } from '../../interfaces/Movie.interface'
import { getMovies } from '../../api'

const MovieSection = () => {

  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    try {
      // const response = await fetch('http://localhost:3001/movies');
      // const data = await response.json();
      const response = await getMovies();
      setMovies(response);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  // Fetch movies when the component mounts
  useState(() => {
    fetchMovies();
  });

  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant='secondary'>
          <InputText placeholder='Buscar filmes...'/>
          <Button variant='icon'>
            <FaSearch/>
          </Button>
        </Fieldset>
        <h1 className={styles.titulo}>Em cartaz</h1>
        <MovieList movies={movies}/>
      </section>
    </main>
  )
}

export default MovieSection;