import styles from './Movie.module.css'

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { APIKey, API } from "../../config/key";

function Movie(){
  const {id} = useParams();
  const image_path = 'https://image.tmdb.org/t/p/w500';
  const[movie, setMovie] = useState(null);

  const getMovie = async(url) =>{
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  }

  const formatCurrency = ((number) =>{
    return number.toLocaleString("pt-BR",{
      style: "currency",
      currency: "BRL",
    });
  });

  useEffect(()=>{
    const movieURL = `${API}${id}?api_key=${APIKey}&language=pt-BR`
    getMovie(movieURL)
  },[])

  return(
    <div className={styles.containerMovie}>
      {movie &&(
        <div className={styles.cardMovie}>
          <img src={`${image_path}${movie.poster_path}`} alt={movie.title}></img>
          <div className={styles.containerTextMovie}>
            <h1>{movie.title}</h1>
            <small className={styles.dataLancamento}>{movie.release_date.slice(0,4)}</small>
            <small>{movie.runtime} min</small>
            <p className={styles.votesMovie}><svg className={styles.vote} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" fill='yellow'/></svg>{movie.vote_average}</p>
            <p>{movie.overview == 0 && <p>Texto não encontrado</p>}</p>
            <p className={styles.overviewMovie}>{movie.overview}</p>
            <p className={styles.billedWithMovie}>Orçamento<span>{formatCurrency(movie.budget)}</span></p>
            <p className={styles.billedWithMovie}>Receita<span>{formatCurrency(movie.revenue)}</span></p>
           

          </div>
        </div>
      )}
    </div>
  )
}
export default Movie;