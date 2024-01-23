import '../../App.css'
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Sidebar from '../sidebar/Sidebar';
import styles from './Navbar.module.css'
import Logo from './logo.png'
import Menu from './menu.png'
import Search from './search.png'

const Navbar = () => {

    const [sideBar, setSideBar] = useState(false);
    const showSidebar = () => setSideBar(!sideBar, setNavBar(true));

    const [navbar,setNavBar] = useState(false);
    const [search,setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(!search) return
        navigate(`/search?q=${search}`)
        setSearch("")
    };

    function searchClick(){
        document.getElementById("searchForm").classList.toggle("active");
        document.getElementById('inputSearch').focus();
        setNavBar(true);
    }

    const changeColorNav = () =>{
        if(window.scrollY >= 80){
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };

    window.addEventListener('scroll', changeColorNav);

    return(
        <nav className={navbar ? styles.active : styles.navbar}>
            <ul className={styles.navTop}>
                <button onClick={showSidebar} id='menu'><img className={styles.menu} src={Menu} alt="Menu"></img></button>
                <Link to="/"><a href='#main'><li><img className={styles.logo} src={Logo} alt="Logo DFLIX"></img></li></a></Link>
                <div className={styles.rightNav}>
                    <button onClick={searchClick} id="search"><img className={styles.search} src={Search} alt="Procurar"></img></button>
                    <div class="searchForm" id="searchForm">
                        <form onSubmit={handleSubmit}>
                            <input 
                            id="inputSearch"
                            type="text" 
                            placeholder='Pesquise o nome do filme...' 
                            onChange={(e)=> setSearch(e.target.value)}
                            value={search}
                            />
                            <button type='submit'>Pesquisar</button>        
                        </form>
                    </div>
                </div>
            </ul>
            {sideBar && <Sidebar active={setSideBar} />}
        </nav>
        
    )
       
}

export default Navbar