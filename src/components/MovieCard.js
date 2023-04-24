import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ data }) {
  return (
    <div className="movie-card">
      <Link to={`/movie/${data.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt="movie"
          className="card-img"
        />
      </Link>
      <h3>{data.title}</h3>
      <strong>{data.vote_average}/10</strong>
    </div>
  );
}

export default MovieCard;
