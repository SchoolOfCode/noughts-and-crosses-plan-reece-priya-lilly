import { useState } from "react";
import Game from "../Game";
import Header from "../Header";
import styles from "./App.module.css";
import DarkToggle from "../DarkToggle";

function App() {
  const [darkToggle, setDarkToggle] = useState(true);

  function toggleDarkMode() {
    setDarkToggle(!darkToggle);
    console.log(darkToggle);
  }
  return (
    <div className={darkToggle ? styles.normal : styles.alt}>
      <Header darkToggle={darkToggle} />
      <DarkToggle toggleDarkMode={toggleDarkMode} darkToggle={darkToggle} />
      <Game darkToggle={darkToggle} />
    </div>
  );
}

export default App;
