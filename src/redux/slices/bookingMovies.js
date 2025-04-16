import {createSlice} from "@reduxjs/toolkit";

const bookingMoviesSlice = createSlice({
  name: "bookingMovie",
  initialState: {
    image: "",
    title: "",
    genres: "",
    date: "",
    time: "",
    location: "",
    cinema: "",
    id: "",
    seats: [],
    ticketPrice: 0,
  },
  reducers: {
    bookNow: (state, {payload}) => {
      const result = {...state, ...payload};
      console.log(result);
      return result
    },
    addSeat: (state, {payload}) => {
      state.seats.push(payload)
    }
  },
});

export const { bookNow, addSeat } = bookingMoviesSlice.actions;
export default bookingMoviesSlice.reducer