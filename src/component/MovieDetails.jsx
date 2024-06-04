import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../store/moviesSlice";
import img from "../assets/close.png";

const MovieDetails = ({ selectedMovieId, closeDetails }) => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.movies.details);

  useEffect(() => {
    if (selectedMovieId) {
      dispatch(fetchMovieDetails(selectedMovieId));
    }
  }, [selectedMovieId, dispatch]);

  return (
    <div className="fixed inset-0 bg-gray-950 bg-opacity-75 flex items-center justify-center z-20">
      <div className="bg-[#f1f1f1] p-4 rounded-lg max-w-lg w-full">
        <button
          onClick={closeDetails}
          className="text-right rounded-2xl ml-[32vw]"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px",
          }}
        >
          <img src={img} className="w-10" />
        </button>
        {details ? (
          <>
            <h2 className="text-2xl font-bold ml-[1vw] underline decoration-pink-500">
              {details.Title}
            </h2>
            <img
              src={details.Poster}
              alt={details.Title}
              className="w-full h-64 object-cover mt-4 rounded-lg mb-5"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px",
              }}
            />
            <p className="font-semibold mb-3 ">{details.Plot}</p>
            <p className="font-semibold ">
              <strong>Director:</strong> {details.Director}
            </p>
            <p className="font-semibold ">
              <strong>Cast:</strong> {details.Actors}
            </p>
            <p className="font-semibold">
              <strong>Genre:</strong> {details.Genre}
            </p>
            <p className="font-semibold">
              <strong>Release Date:</strong> {details.Released}
            </p>
          </>
        ) : (
          <p className="text-4xl font-bold ">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
