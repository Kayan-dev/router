import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";

export default function Discover() {
  const [searchText, set_searchText] = useState("");
  const [searchMode, setSearchMode] = useState("status: idle");
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  const params = useParams();

  const search = async () => {
    const routeParam = encodeURIComponent(searchText);
    history.push(`/discover/${routeParam}`);
    console.log("HISTORY:", history);
    console.log("Test Param:", routeParam);
  };

  useEffect(() => {
    async function fetchMovieData() {
      const queryParam = encodeURIComponent(params.searchtext);

      setSearchMode("status: searching");

      const data = await axios.get(
        `https://omdbapi.com/?apikey=e52a9138&s=${queryParam}`
      );

      console.log("Success!", data);

      setSearchMode("status: done");

      setMovies(data.data.Search);
    }

    fetchMovieData();
  }, [params]);

  return (
    <div className="discover">
      <h1>Discover some movies!</h1>
      <div>{searchMode}</div>
      <p>
        <input
          type="text"
          value={searchText}
          placeholder="Enter name"
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      <div className="movies">
        {movies.map((movie, index) => {
          return (
            <Link key={index} to={`/movie/${movie.imdbID}`}>
              <div>
                <h1>{movie.Title}</h1>
                <img alt={movie.Title} src={movie.Poster} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
