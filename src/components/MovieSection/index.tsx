import Fieldset from '../FieldSet'
import InputText from '../InputText'
import Button from '../Button'
import { FaSearch } from 'react-icons/fa'
import styles from './MovieSection.module.css'
import MovieList from '../MovieList'
import useFetchMovies from '../../hooks/useFetchMovies'
import useFilterMovies from '../../hooks/useFilterMovies'
import { ChangeEvent } from 'react'
import { Timer } from '../Timer'
import useCounterSearch from '../../hooks/useCounterSearch'

const MovieSection = () => {
  const { movies, isLoading, error } = useFetchMovies();
  const { searchTerm, setSearchTerm, filteredMovies, handleSearch } = useFilterMovies(movies);
  const [countSearches, setCountSearch] = useCounterSearch() as [number, () => void]; // count está tipado implicitamente como "number"
  
  const handleSearchPress = () => {
    handleSearch();
    setCountSearch();
  };
  
  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant='secondary'>
          <InputText 
            value={searchTerm} 
            onChange={(event: ChangeEvent<HTMLInputElement>) => 
              setSearchTerm(event.target.value)
            } 
            placeholder={`Buscar filmes... total de buscas: ${countSearches}`}
          />
          <Button variant='icon' onClick={handleSearchPress}>
            <FaSearch/>
          </Button>
        </Fieldset>
        <h1 className={styles.titulo}>Em cartaz</h1>
        <Timer/>
        {isLoading && <p>Carregando filmes...</p>}
        {error && <p className={styles.error}>{error}</p>}
        <MovieList movies={filteredMovies}/>
      </section>
    </main>
  )
}

export default MovieSection;