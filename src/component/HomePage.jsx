import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, setPage } from "../store/moviesSlice";
import Navbar from "../component/Navbar";
import MovieList from "../component/MovieList";
import MovieDetails from "../component/MovieDetails";
import AuthForm from "../component/AuthForm";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("Avengers");
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const currentPage = useSelector((state) => state.movies.currentPage);
  const totalResults = useSelector((state) => state.movies.totalResults);
  const totalPages = Math.ceil(totalResults / 10);

  useEffect(() => {
    if (user) {
      dispatch(fetchMovies({ searchTerm, page: currentPage }));
    }
  }, [searchTerm, currentPage, dispatch, user]);

  const viewDetails = (id) => {
    setSelectedMovieId(id);
  };

  const closeDetails = () => {
    setSelectedMovieId(null);
  };

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  if (!user) {
    return <AuthForm />;
  }

  return (
    <div>
      <Navbar setSearchTerm={setSearchTerm} />
      <MovieList viewDetails={viewDetails} />
      {selectedMovieId && (
        <MovieDetails
          selectedMovieId={selectedMovieId}
          closeDetails={closeDetails}
        />
      )}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="mx-2">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
