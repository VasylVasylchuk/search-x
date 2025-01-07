import { ActionTypes, SearchContext } from "../store";
import { memo, useContext } from "react";
import styles from "./Autocomplete.module.css";

const Autocomplete = () => {
  const { state, dispatch } = useContext(SearchContext);

  const handleAutocompleteClick = (item) => {
    if(item.isRemoved) return null;
    document.activeElement?.blur();
    dispatch({ type: ActionTypes.SET_SEARCH_TERM, payload: item.title });
    dispatch({ type: ActionTypes.SET_RESULTS });
  };

  const handleRemoveHistory = (item) => {
    item.isRemoved = true;
    dispatch({
      type: ActionTypes.REMOVE_FROM_SEARCH_HISTORY,
      payload: item.title,
    });
  };

  if (!state.showAutocomplete || !state.autocompleteItems?.length) {
    return null;
  }

  return (
    <ul className={styles.autocompleteList}>
      {state.autocompleteItems.map((item) => (
        <li
          key={item.item}
          className={`${styles.autocompleteItem} ${
            item.isHistory && styles.purple
          }
          ${item.isRemoved && styles.dark}`}
          onMouseDown={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleAutocompleteClick(item);
          }}
        >
          {item.title}
          {item.isHistory && !item.isRemoved && (
            <button
              onMouseDown={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handleRemoveHistory(item);
              }}
              className={styles.removeButton}
            >
              &#215;
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default memo(Autocomplete);
