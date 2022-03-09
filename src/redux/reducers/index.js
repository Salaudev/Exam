import { combineReducers } from "redux";
import bookReducer from "./BookReducer";
import booksReducer from "./BooksReducer";

const rootReducer = combineReducers({
  books: booksReducer,
  book: bookReducer,
});

export default rootReducer;
