import {
  LOADING, SEARCH_DATA, USER_DATA, ERROR
} from "../types";

const appReucer = (state, action) => {

  switch (action.type) {

    case SEARCH_DATA:
      return { ...state, loading: false, searchData: action.payload }

    case USER_DATA:
      return { ...state, loading: false, userData: action.payload }

    case ERROR:
      return { ...state, loading: false, error: action.payload }

    case LOADING:
      return { ...state, loading: true }
    default:
      return state;
  }
};


export default appReucer;


