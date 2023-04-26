import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function MoviePage() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=5f51186fa9ac2cc235fc08334e230f91`
      )
      .then(res => {
        setMovieData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);
  return (
    <>
      {movieData && (
        <div className="container">
          <img
            src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
            className="movie-page-img"
            alt="movie-page-img"
          />
          <h2>{movieData.title}</h2>
          <p>{movieData.overview}</p>
          <strong>
            Release Date:{" "}
            {movieData.release_date.split("-").reverse().join("/")}
          </strong>
          <br />
          <strong>
            Genres: {movieData.genres.map(genre => genre.name).join(", ")}
          </strong>
          <Link to="/movies" className="back-btn">
            Go Back
          </Link>
        </div>
      )}
    </>
  );
}

export default MoviePage;
