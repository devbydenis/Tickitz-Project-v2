import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPopularMovies, getGenres } from "../../service.js";

const getPopularMovieThunk = createAsyncThunk(
  'movies/getPopularMovies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getPopularMovies()
      if (!response.ok) throw new Error(response.statusText);

      const json = await response.json()
      const data = json.results
      console.log("popular movies", data)
      return data

    } catch (error) {
      if (error instanceof Error) rejectWithValue(error);
    }
  }
)

const getGenresMovieThunk = createAsyncThunk(
  'movies/getGenresMovies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getGenres()
      if (!response.ok) throw new Error(response.statusText);
  
      const data = await response.json()
      console.log("genres movies", data.genres);
      return data.genres

    } catch (error) {
      if (error instanceof Error) rejectWithValue(error);
    }
  }
)

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovie: [],
    genres: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopularMovieThunk.pending, (state) => {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
        state.error = null
      })
      .addCase(getPopularMovieThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.error = null
        state.popularMovie = payload
      })
      .addCase(getPopularMovieThunk.rejected, (state, { payload, error }) => {
        state.isLoading = false
        state.isError = true
        state.error = payload || error
      })
      .addCase(getGenresMovieThunk.fulfilled, (state, { payload }) => {
        state.genres = payload
      })
  } 
})

export const movieActions = {
  ...movieSlice.actions,
  getPopularMovieThunk,
  getGenresMovieThunk
}
export default movieSlice.reducer