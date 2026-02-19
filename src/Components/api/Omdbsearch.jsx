import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Omdbsearch = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const searchMovies = async (pageNumber = 1) => {
    if (!query) return alert("Type something first");

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=9ff91758&s=${query}&page=${pageNumber}`
      );

      if (response.data.Response === "True") {
        setMovies(response.data.Search);
        setTotalResults(response.data.totalResults);
        setPage(pageNumber);
      } else {
        setMovies([]);
        setTotalResults(0);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-3">OMDB Search</h1>

      <div className="text-center mb-3">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="form-control w-50 d-inline"
        />
        <button
          onClick={() => searchMovies(1)}
          className="btn btn-danger ms-2"
        >
          Search
        </button>
      </div>

      <h4 className="text-center">Total Results: {totalResults}</h4>

      <div className="row mt-4">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="col-sm-12 col-md-6 col-lg-3 mb-4"
          >
            <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: "none" }}>
              <div className="card h-100 shadow">
                <img
                  src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}
                  className="card-img-top"
                  alt={movie.Title}
                  style={{ height: "350px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h6>{movie.Title}</h6>
                  <p>Year: {movie.Year}</p>
                  <p>Type: {movie.Type}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="text-center mb-5">
          <button
            disabled={page === 1}
            onClick={() => searchMovies(page - 1)}
            className="btn btn-secondary me-2"
          >
            Previous
          </button>

          <span> Page {page} of {totalPages} </span>

          <button
            disabled={page === totalPages}
            onClick={() => searchMovies(page + 1)}
            className="btn btn-secondary ms-2"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
