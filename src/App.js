import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Routes, Route} from "react-router-dom";

import PlayPage from './pages/Play.page';
import HomePage from './pages/Home.page';
import MoviePage from './pages/Movies.page';

function App() {
  return (
    <Routes>
      <Route path="/"element={<HomePage/>} />
      <Route path="/movie/:id" element={<MoviePage/>} />
      <Route path="/plays" element={<PlayPage/>} />

    </Routes> 
  );
}

export default App;
