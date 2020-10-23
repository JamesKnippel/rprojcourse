import { CHANGE_SEARCH_FIELD } from './constants';

const initialState = {
  searchField: '',
}

export const searchRobots = (state=initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      // return Object.assign({}, state, { searchField: action.payload }) // traditional style
      return { ...state, searchField: action.payload } // es6/es7
    
    default:
      return state;
  }
}