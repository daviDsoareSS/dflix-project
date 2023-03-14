import LoaderSvg from '../../img/Loader.svg'
import styles from './Loader.module.css'

function Loader(){
  return(
    <div className={styles.loaderContainer}>
      <img className={styles.loader} src={LoaderSvg}></img>
    </div>
  )
}
export default Loader;