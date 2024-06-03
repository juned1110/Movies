import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "bbb3fdd7";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ searchTerm, page }) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}&page=${page}`
    );
    return {
      movies: response.data.Search,
      totalResults: response.data.totalResults,
    };
  }
);

export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (id) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
    );
    return response.data;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    details: {},
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    currentPage: 1,
    totalResults: 0,
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.imdbID !== action.payload.imdbID
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.list = action.payload.movies;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.details = action.payload;
      });
  },
});

export const { addFavorite, removeFavorite, setPage } = moviesSlice.actions;

export default moviesSlice.reducer;
