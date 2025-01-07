import React, { useReducer, createContext } from "react";
import mockDB from "../mock";

export const ActionTypes = Object.freeze({
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  REMOVE_FROM_SEARCH_HISTORY: "REMOVE_FROM_SEARCH_HISTORY",
  SET_RESULTS: "SET_RESULTS",
  SHOW_AUTOCOMPLETE: "SHOW_AUTOCOMPLETE",
  SET_AUTOCOMPLETE_ITEMS: "SET_AUTOCOMPLETE_ITEMS",
});

const initialState = {
  searchTerm: "",
  searchHistory: [],
  results: [],
  showAutocomplete: false,
  autocompleteItems: [],
  searchTime: 0,
};

const searchReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    
    case ActionTypes.REMOVE_FROM_SEARCH_HISTORY:
      return {
        ...state,
        searchHistory: state.searchHistory.filter(
          (item) => item.title !== action.payload
        ),
      };
    
    case ActionTypes.SET_RESULTS:
      const searchTerm = state.searchTerm.toLowerCase();
      const start = new Date();
      const results = mockDB.filter((item) =>
        item.title.toLowerCase().includes(searchTerm)
      );

      const searchHistory = state.searchHistory.some(
        (item) => item.title === searchTerm
      )
        ? [...state.searchHistory]
        : [{ title: searchTerm, isHistory: true }, ...state.searchHistory];

      return {
        ...state,
        searchHistory,
        results,
        searchTime: new Date() - start,
        showAutocomplete: false,
      };

    case ActionTypes.SET_AUTOCOMPLETE_ITEMS:
      const autocompleteItems = [
        ...state.searchHistory.filter((item) =>
          item.title.toLowerCase().startsWith(state.searchTerm.toLowerCase())
        ),
        ...mockDB.filter((item) =>
          item.title.toLowerCase().startsWith(state.searchTerm.toLowerCase())
        ),
      ].slice(0, 10);

      return { ...state, autocompleteItems };
    
    case ActionTypes.SHOW_AUTOCOMPLETE:
      return { ...state, showAutocomplete: action.payload };

    default:
      return state;
  }
};

export const SearchContext = createContext(null);

const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
