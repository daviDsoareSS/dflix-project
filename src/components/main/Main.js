import {Link} from 'react-router-dom';

import styles from './Main.module.css';
import LogoDoctorStrange from './logoDoctorStrange.png';
import Wallpaper from './wallpaper.png';

function Main(){
  return(
    <main id="main">
      <img className={styles.wallpaperHome} src={Wallpaper} alt="Wallpaper Strange Doctor"></img>
      <div className={styles.containerMain}>
        <img src={LogoDoctorStrange} alt="Logo Doctor Strange"></img>
        <p>Após sua carreira ser destruída, um brilhante, porém arrogante, cirurgião ganha uma nova chance em sua vida quando um feiticeiro o treina para se tornar o Mago Supremo.</p>  
        <div className={styles.containerButtons}>
          <Link to="/search?q=doutor%20estranho"><button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 14v8h-12v-8h12zm2-6h-16v16h16v-16zm-3-4h-17v17h2v-15h15v-2zm-3-4h-18v18h2v-16h16v-2z" fill="white"/></svg>Outras versões 
          </button></Link>
          <Link to="/movie/284052"><button>
          <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8c-.414 0-.75.336-.75.75v5.5c0 .414.336.75.75.75s.75-.336.75-.75v-5.5c0-.414-.336-.75-.75-.75zm-.002-3c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z" fill-rule="nonzero" fill='white'/></svg>Informações
          </button></Link>
        </div>
      </div>
    </main>
  )
}
export default Main