import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

function Movies() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [moviesData, setMoviesData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5f51186fa9ac2cc235fc08334e230f91&page=${page}`
      )
      .then(({ data }) => {
        setMoviesData(data.results);
        setTotalPages(data.total_pages);
      })
      .catch(err => console.log(err));
  }, [page]);

  return (
    <div>
      <input placeholder="Search movies" />

      <div className="movies-container">
        {moviesData.map(movie => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </div>
      <div className="pagination">
        <button>{"<"}</button>
        <p>
          {page}/{totalPages}
        </p>
        <button>{">"}</button>
      </div>
    </div>
  );
}

export default Movies;
