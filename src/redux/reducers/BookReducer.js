import { SET_ERROR, SET_LOADING, SET_BOOK } from "../types";

const initialState = {
  book: [],
  category: "all",
  loading: false,
  error: false,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_BOOK:
      return { ...state, book: action.payload };
    default:
      return state;
  }
};

export default bookReducer;
