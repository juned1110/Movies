import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../store/moviesSlice";

const MovieDetails = ({ selectedMovieId, closeDetails }) => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.movies.details);

  useEffect(() => {
    if (selectedMovieId) {
      dispatch(fetchMovieDetails(selectedMovieId));
    }
  }, [selectedMovieId, dispatch]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg max-w-lg w-full">
        <button onClick={closeDetails} className="text-right text-2xl">
          &times;
        </button>
        {details ? (
          <>
            <h2 className="text-2xl">{details.Title}</h2>
            <img
              src={details.Poster}
              alt={details.Title}
              className="w-full h-64 object-cover mt-4"
            />
            <p>{details.Plot}</p>
            <p>
              <strong>Director:</strong> {details.Director}
            </p>
            <p>
              <strong>Cast:</strong> {details.Actors}
            </p>
            <p>
              <strong>Genre:</strong> {details.Genre}
            </p>
            <p>
              <strong>Release Date:</strong> {details.Released}
            </p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
