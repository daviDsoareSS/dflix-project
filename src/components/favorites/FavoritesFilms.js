import styles from './Favorites.module.css'
import { useState, useEffect } from 'react';

import { APIKey } from '../../config/key';


function FavoritesFilms(){  
  return(
    <div className={styles.ContainerFavorites}>
      <h1>Meus filmes favoritos</h1>
      <p>Visualize os filmes que você adicionou</p>
      <div className={styles.ContainerFilms}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
export default FavoritesFilms;
