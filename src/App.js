import React, { useEffect, useState } from "react";
import MovieBox from "./components/MovieBox";

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=67011cf113627fe3311316af752fbcc5";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=67011cf113627fe3311316af752fbcc5&query";
function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(API_URL);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then(data => {
        setMovies(data.results);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);

      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="container" id="ctr">
      <header id="header">
        <h3 id="hdrttl"><span id="I">I</span>nsta Pl<i class="material-icons orange600 md-48">play_arrow</i>y</h3>
        <form onSubmit={handleOnSubmit}>
          <input id="srch" className="search" type="text" placeholder="SearchMovies" value={searchTerm} onChange={handleOnChange}></input>
          <i class="material-icons searchicon">search</i>
        </form>
      </header>

      <banner className="bannerImg">
        <img src="D:\BePractical\React\Streaming-app\streaming-app\src\assets\download.jpg" at="stranger things"></img>
      </banner>
      <h3 id="heading">Trending</h3>
      <div className="grid">
        {movies.map((movieReq) =>
          <MovieBox key={movieReq.id}{...movieReq} />)}
      </div>
    </div>
  );
}

export default App;
