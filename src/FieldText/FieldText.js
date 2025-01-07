import { memo, useContext } from "react";
import styles from "./FieldText.module.css";
import { ActionTypes } from "../store";
import { SearchContext } from "../store";

const FieldText = () => {
  const { state, dispatch } = useContext(SearchContext);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
      dispatch({ type: ActionTypes.SET_RESULTS });
    }
  };

  const handleChange = (e) => {
    dispatch({
      type: ActionTypes.SET_SEARCH_TERM,
      payload: e.target.value,
    });
    dispatch( { type: ActionTypes.SET_AUTOCOMPLETE_ITEMS });
  };

  const handleFocus = (payload) => {
    dispatch({
      type: ActionTypes.SHOW_AUTOCOMPLETE,
      payload,
    });
  }

  return (
    <input
      type="text"
      value={state.searchTerm}
      onChange={handleChange}
      placeholder="Search..."
      onFocus={() => handleFocus(true)}
      onBlur={() => handleFocus(false)}
      autoFocus
      className={styles.input}
      onKeyDown={handleKeyDown}
    />
  );
};

export default memo(FieldText);
