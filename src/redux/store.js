import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  // pada createstore reducer jika lebih dari satu digabungkan menggunakan combineReducer
  reducer: {
    // movies: moviesReducer,
  },
  
})

export default store