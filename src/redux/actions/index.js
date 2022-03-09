import { getCategories } from "../../axios";
import { getDataByCategoryName } from "../../axios";
import { dispatch } from "../store";
import { SET_ERROR, SET_LOADING, SET_BOOKS, SET_BOOK } from "../types";

export const setLoading = (state) => {
  dispatch({ type: SET_LOADING, payload: state });
};

export const setError = (state) => {
  dispatch({ type: SET_ERROR, payload: state });
};

export const setBooks = async () => {
  setLoading(true);
  setError(false);

  const obj = await getCategories();

  if (obj.success) {
    console.log("SET_BOOKS");
    dispatch({ type: SET_BOOKS, payload: obj.data || [] });
  } else {
    setError(true);
  }

  setLoading(false);
};

export const setBook = async (category) => {
  setLoading(true);
  setError(false);

  const obj = await getDataByCategoryName(category);

  console.log(obj, "     obj");

  if (obj.success) {
    console.log("SET_BOOKS");
    dispatch({ type: SET_BOOK, payload: obj.data || [] });
  } else {
    setError(true);
  }

  setLoading(false);
};
