import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Moviepage() {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  console.log("PARA", params);

  useEffect(() => {
    const getMovieById = async () => {
      const movieId = params.movieId;

      const response = await axios.get(
        `https://omdbapi.com/?apikey=e52a9138&i=${movieId}`
      );
      console.log("RESPONSE", response);
      setMovie(response.data);
      console.log("movieID", movieId);
    };

    getMovieById();
  }, [params.movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h2>{movie.Title}</h2>
      <img alt={movie.Poster} src={movie.Poster}></img>
      <h3>Actors: {movie.Actors}</h3>
      <h3>
        Year of release: {movie.Year} | IMdB rating: {movie.imdbRating}
      </h3>
      <h3>Genre: {movie.Genre}</h3>
      <p>{movie.Plot}</p>
    </div>
  );
}
