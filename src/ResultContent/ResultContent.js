import { memo, useContext } from "react";
import styles from "./ResultContent.module.css";
import { SearchContext } from "../store";

const ResultContent = () => {
  const { state } = useContext(SearchContext);

  if (!state.results.length) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div>
        <p>
          Found {state.results.length} result(s) in {state.searchTime} ms
        </p>
        <ul className={styles.list}>
          {state.results.map((result) => (
            <li key={result.id} className={styles.item}>
              <a
                href={result.link}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {result.title}
              </a>
              <p>{result.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default memo(ResultContent);
