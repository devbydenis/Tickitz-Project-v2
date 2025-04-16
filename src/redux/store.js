import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./slices/movies";
import bookingMoviesSlice from "./slices/bookingMovies";
import {
  persistStore,
  persistCombineReducers,
  REGISTER,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "tickitz",
  storage,
};

const persistedReducers = persistCombineReducers(persistConfig, {
  movies: moviesReducer,
  bookingMovie: bookingMoviesSlice,
});

const store = configureStore({
  reducer: persistedReducers,
  // devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REGISTER, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE],
      },
    });
  },
});

export const persistedStore = persistStore(store);
export default store;
