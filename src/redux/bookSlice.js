import { createSlice } from "@reduxjs/toolkit";
import {bookLib} from "../utils/bookLib";

const bookSlice = createSlice({
  name: 'book',
  initialState: {
     books: bookLib,
  },
  reducers: {
    addBook(state, action){
      state.books.push(action.payload);
    }
  }
});

export default bookSlice.reducer;
export const {addBook} = bookSlice.actions;