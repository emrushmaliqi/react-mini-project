import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

function Movies() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [moviesData, setMoviesData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    if (!searchQuery) {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5f51186fa9ac2cc235fc08334e230f91&page=${page}`
        )
        .then(({ data }) => {
          setMoviesData(data.results);
          setTotalPages(data.total_pages);
        })
        .catch(err => console.log(err));
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=5f51186fa9ac2cc235fc08334e230f91&page=${page}&query=${searchQuery}`
        )
        .then(({ data }) => {
          setMoviesData(data.results);
          setTotalPages(data.total_pages);
        })
        .catch(err => console.log(err));
    }
  }, [page, searchQuery]);

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handleSearch = e => {
    e.preventDefault();
    setPage(1);
    setSearchQuery(e.target.children[0].value);
    e.target.children[0].value = "";
  };
  return (
    <div>
      <form onSubmit={handleSearch} className="search">
        <input type="search" placeholder="Search movies" />
        <button>Search</button>
      </form>

      {moviesData.length > 0 ? (
        <>
          <div className="movies-container">
            {moviesData.map(movie => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
              />
            ))}
          </div>
          <div className="pagination">
            <button onClick={handlePrevious}>{"<"}</button>
            <p>
              {page}/{totalPages}
            </p>
            <button onClick={handleNext}>{">"}</button>
          </div>
        </>
      ) : (
        <h1 className="no-movies-found">No movies found</h1>
      )}
    </div>
  );
}

export default Movies;
