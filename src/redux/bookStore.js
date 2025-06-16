import {configureStore} from '@reduxjs/toolkit'
import bookReducer from './bookSlice.js'

const bookStore = configureStore({
  reducer: {
    book: bookReducer,
  },
});

export default bookStore;