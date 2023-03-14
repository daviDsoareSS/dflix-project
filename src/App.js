import './App.css';

import Navbar from './components/nav/Navbar';
import Main from './components/main/Main';

import { Outlet, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Main/> } />
      </Routes>
      <Outlet />
    </div>
  );
}


export default App;
