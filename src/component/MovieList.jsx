import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = ({ viewDetails }) => {
  const movies = useSelector((state) => state.movies.list);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} viewDetails={viewDetails} />
      ))}
    </div>
  );
};

export default MovieList;
