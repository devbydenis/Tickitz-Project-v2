import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./slices/todo";

const store = configureStore({
  // pada createstore reducer jika lebih dari satu digabungkan menggunakan combineReducer
  reducer: {
    todo: todoReducer
  },
  // devTools: constant.nodeEnv !== "production"
})

export default store