import './App.css';

import Navbar from './components/nav/Navbar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

import { Outlet, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content-wrap'>
        <Routes>
          <Route path='/' element={<Main/> } />
        </Routes>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}


export default App;
