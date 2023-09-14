
// import "./App.css";
import "./css/HomePage.css"
import "./css/Banner.css"
import "./css/Feature.css"
import "./css/Footer.css"
import "./css/Upcoming.css"
import "./css/Popular.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './components/pages/HomePage';
import MoviesPage from './components/pages/MoviesPage';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/movies" element={<MoviesPage />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;