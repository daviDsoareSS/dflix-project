import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SectionPopularFilms from './components/section/SectionPopularFilms';
import SectionUpcoming from './components/section/SectionUpcoming';
import SectionTopRated from './components/section/SectionTopRated';
import Search from './components/search/Search';
import Movie from './components/movies/Movie';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <SectionPopularFilms />,
      },
      {
        path: "Upcoming",
        element: <SectionUpcoming />,
      },
      {
        path: "TopRated",
        element: <SectionTopRated />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "movie/:id",
        element: <Movie />,
      },
    ],
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
