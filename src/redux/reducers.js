import { CHANGE_SEARCH_FIELD } from './constants';

const initialState = {
  searchField: '',
}

export const searchRobots = (state = initialState, action = {}) => {
  console.log('Action Type being executed: ', action.type)
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      
      /* This returns a new state according to the action we provide it */
      return { ...state, searchField: action.payload } // es6/es7
      // return Object.assign({}, state, { searchField: action.payload }) // traditional style
    
    default:
      return state;
  }
}