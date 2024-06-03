import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/moviesSlice";

const MovieCard = ({ movie, viewDetails }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movies.favorites);
  // const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <div className="border p-2 m-2 rounded-lg shadow-lg">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-64 object-cover"
      />
      <h2 className="text-xl mt-2">{movie.Title}</h2>
      <p>{movie.Year}</p>
      <button
        onClick={() => viewDetails(movie.imdbID)}
        className="bg-blue-500 text-white p-2 rounded mt-2"
      >
        Details
      </button>
      {/* <button
        onClick={toggleFavorite}
        className={`p-2 rounded mt-2 ${
        isFavorite ? "bg-red-500" : "bg-green-500"
        }`}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button> */}
    </div>
  );
};

export default MovieCard;
