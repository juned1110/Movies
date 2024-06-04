import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addFavorite, removeFavorite } from "../store/moviesSlice";

const MovieCard = ({ movie, viewDetails }) => {
  // const dispatch = useDispatch();
  // const favorites = useSelector((state) => state.movies.favorites);
  // const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  // const toggleFavorite = () => {
  //   if (isFavorite) {
  //     dispatch(removeFavorite(movie));
  //   } else {
  //     dispatch(addFavorite(movie));
  //   }
  // };

  return (
    <div
      className="p-2 m-2 rounded-lg shadow-xl mb-5 mt-10 bg-[#dddada] border-4 border-solid border-zinc-100 hover:border-slate-300"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;",
      }}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-64 object-cover rounded-[30px] transition-transform transform hover:scale-110"
        style={{
          boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
        }}
      />
      <h2 className="text-xl ml-3 mt-5 font-bold">{movie.Title}</h2>
      <p className="font-bold ml-3">{movie.Year}</p>
      <button
        onClick={() => viewDetails(movie.imdbID)}
        className="bg-blue-500 text-white p-2 rounded-md mt-2 ml-3 font-bold mb-3 hover:bg-blue-400"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px",
        }}
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
