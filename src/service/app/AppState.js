/* eslint-disable react-hooks/rules-of-hooks */
import React, { useReducer } from "react";
import appContext from "./AppContext";
import appReducer from "./AppReducer";
import axios from "axios";
import { BASE_URL, LOADING, SEARCH_DATA, USER_DATA, ERROR } from "../types";

const AppState = (props) => {
  const initialState = {
    loading: false,
    error: null,
    searchData: [],
    userData: {}
  };

  const [state, dispatch] = useReducer(appReducer, initialState);


  // SEARCH USER
  const searchUser = async (query) => {

    try {
      setLoader();
      const res = await axios.post(BASE_URL + 'searchArtist', { query });
      dispatch({ type: SEARCH_DATA, payload: res.data });
    } catch (error) {
      let errorMessage = '';
      if (error.response) {
        // Request made and server responded
        errorMessage = error.response.data;
      } else if (error.request) {
        // The request was made but no response was received
        errorMessage = (error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        errorMessage = (error.message);
      }
      setError(errorMessage);
    }

  };


  // GET USER
  const getUser = async (query, result) => {

    try {
      setLoader();
      const res = await axios.post(BASE_URL + 'getArtistDetails', query);
      dispatch({ type: USER_DATA, payload: res.data });
      result(true);
    } catch (error) {
      let errorMessage = '';
      if (error.response) {
        // Request made and server responded
        errorMessage = error.response.data;
      } else if (error.request) {
        // The request was made but no response was received
        errorMessage = (error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        errorMessage = (error.message);
      }
      setError(errorMessage);
      result(false);

    }

  };

  const setLoader = () => dispatch({ type: LOADING });
  const setError = (message) => dispatch({ type: ERROR, dispatch: message });

  return (
    <appContext.Provider
      value={{
        loading: state.loading,
        error: state.error,
        searchData: state.searchData,
        userData: state.userData,
        searchUser,
        getUser, setError
      }}
    >
      { props.children}
    </appContext.Provider >
  );
};

export default AppState;
