import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

const initialStateSearch = {
  searchField: "",
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
  console.log("Action Type being executed: ", action.type);
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      /* This returns a new state according to the action we provide it */
      return { ...state, searchField: action.payload }; // es6/es7
    // return Object.assign({}, state, { searchField: action.payload }) // traditional style

    default:
      return state;
  }
};

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: ''
}
export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      // return Object.assign({}, state, { isPending: true });
      return { ...state, isPending: true };    
    
    case REQUEST_ROBOTS_SUCCESS:
      // return Object.assign({}, state, {robots: action.payload, isPending: false});
      return { ...state, robots: action.payload, isPending: false };
    
    case REQUEST_ROBOTS_FAILED:
      // return Object.assign({}, state, {error: action.payload, isPending: false});
      return { ...state, error: action.payload, isPending: false };
    
    default:
      return state;
  }
};
