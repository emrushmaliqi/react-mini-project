import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ id, title, poster_path, vote_average }) {
  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="movie"
          className="card-img"
        />
      </Link>
      <h3>{title}</h3>
      <strong>{vote_average}/10</strong>
    </div>
  );
}

export default MovieCard;
