import React from "react";
import styles from "./App.module.css";
import ResultContent from "./ResultContent/ResultContent";
import FieldText from "./FieldText/FieldText";
import Autocomplete from "./Autocomplete/Autocomplete";

function App() {

  return (
    <div className={styles.container}>
        <FieldText />
        <Autocomplete />
        <ResultContent />
    </div>
  );
}

export default App;
