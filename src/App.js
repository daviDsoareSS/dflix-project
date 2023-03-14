import './App.css';

import Navbar from './components/nav/Navbar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

import { Outlet, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Main/> } />
      </Routes>
      <Outlet />
      <Footer />
    </div>
  );
}


export default App;
