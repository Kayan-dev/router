import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [searchState, set_searchState] = useState("idle");
  const [movieState, set_movieState] = useState([]);
  const params = useParams();
  const history = useHistory();

  console.log("PARAMS", params);

  const search = async () => {
    const routeParam = encodeURIComponent(searchText);
    history.push(`/discover/${routeParam}`);
    console.log("HISTORY:", history);
    console.log("Test Param:", routeParam);
  };

  useEffect(() => {
    async function fetchMovieData() {
      const queryParam = encodeURIComponent(params.searchtext);

      set_searchState("Status: searching");

      const response = await axios.get(
        `https://omdbapi.com/?apikey=142aeec2&s=${queryParam}`
      );

      console.log("what is the result", response);
      set_searchState("Status: done!");
      set_movieState(response.data.Search);
    }
    if (params.searchtext) {
      fetchMovieData();
    }
  }, [params.searchtext]);

  //set_Movies sets the data inside the movieState, then you can use .map in the return part

  return (
    <div className="discover">
      <h1>Discover some movies!</h1>
      <div>{searchState}</div>

      <p>
        <input
          type="text"
          value={searchText}
          placeholder="Search now"
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      <div className="movies">
        {searchState === "searching" && <p>Loading....</p>}
        {movieState.map((movie, index) => {
          return (
            <Link key={index} to={`/movie/${movie.imdbID}`}>
              <div>
                <h1>{movie.Title}</h1>
                <img alt={movie.Poster} src={movie.Poster}></img>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
