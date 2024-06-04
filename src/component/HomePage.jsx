import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, setPage } from "../store/moviesSlice";
import Navbar from "../component/Navbar";
import MovieList from "../component/MovieList";
import MovieDetails from "../component/MovieDetails";
import AuthForm from "../component/AuthForm";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

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
    if (page >= 1 && page <= totalPages) {
      dispatch(setPage(page));
    }
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
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700 ml-[20vw] mt-6">
              Showing{" "}
              <span className="font-medium">{(currentPage - 1) * 10 + 1}</span>{" "}
              to{" "}
              <span className="font-medium">
                {Math.min(currentPage * 10, totalResults)}
              </span>{" "}
              of <span className="font-medium">{totalResults}</span> results
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm mt-10 mr-[11vw] mb-3"
              aria-label="Pagination"
            >
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              {[...Array(totalPages).keys()].map((page) => (
                <button
                  key={page + 1}
                  onClick={() => handlePageChange(page + 1)}
                  aria-current={currentPage === page + 1 ? "page" : undefined}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                    currentPage === page + 1
                      ? "bg-indigo-600 text-white"
                      : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  } focus:z-20 focus:outline-offset-0`}
                >
                  {page + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
