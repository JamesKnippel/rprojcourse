// CONSTANT IMPORTS
import { CHANGE_SEARCH_FIELD } from "./constants";

export const setSearchField = (text) => {
  console.log(text, 'redux action');
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };
};
