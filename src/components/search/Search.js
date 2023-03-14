import './Search.module.css'
import styles from '../../components/section/Section.module.css'

import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { APIKey, APISearch } from '../../config/key';
import Loader from '../loader/Loader';

function Search(){
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const image_path = 'https://image.tmdb.org/t/p/w500';
  const [removeLoader, setRemoveLoader] = useState(false);
  const query = searchParams.get("q");


  const getSearchedMovies = async(url) =>{
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  }

  useEffect(() => {
    const searchWithQueryURL = `${APISearch}?api_key=${APIKey}&query=${query}&language=pt-BR`;
    setRemoveLoader(true)
    
    getSearchedMovies(searchWithQueryURL)
  }, [query])


  return(
    <section class="containerSearch" id="upcoming">
    <div className={styles.containerSection}>
    <h1>Buscando por: <span>{query}</span></h1>
    </div>
    <div className={styles.containerFilms}>
      {movies.length === 0 && <p>Nada encontrado...</p>}
      {movies.map(movie => {
        return(
          <div className={styles.filmCard}>
            <img src={`${image_path}${movie.poster_path}`} alt={movie.title}></img>
            <p>{movie.title}</p>         
            <div className={styles.informationFilm}>
              <h2>{movie.title}</h2>         
              <p><svg className={styles.vote} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" fill='yellow'/></svg>{movie.vote_average}</p>
              <Link to={`/movie/${movie.id}`}><span><svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8c-.414 0-.75.336-.75.75v5.5c0 .414.336.75.75.75s.75-.336.75-.75v-5.5c0-.414-.336-.75-.75-.75zm-.002-3c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z" fill-rule="nonzero" fill='white'/></svg>Ver mais detalhes</span></Link>
              <span><svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fill-rule="nonzero" fill='white'/></svg>Adicionar à lista de favoritos</span>
              <div className={styles.buttonFilmResponsive}> 
              <Link to={`/movie/${movie.id}`}><svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8c-.414 0-.75.336-.75.75v5.5c0 .414.336.75.75.75s.75-.336.75-.75v-5.5c0-.414-.336-.75-.75-.75zm-.002-3c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z" fill-rule="nonzero" fill='white'/></svg></Link>
                <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fill-rule="nonzero" fill='white'/></svg>
              </div>
            </div>
          </div>
        )
      })}
      {!removeLoader && <Loader />}

    </div>
</section>
  )
}
export default Search;