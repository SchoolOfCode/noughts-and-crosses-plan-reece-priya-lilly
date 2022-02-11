import styles from "./DarkToggle.module.css";

function DarkToggle({ toggleDarkMode, darkToggle }) {
  return (
    <div className={styles.container}>
      <div onClick={toggleDarkMode} className={styles.togglebase}>
        <div
          className={styles.toggleswitch}
          id={darkToggle ? styles.toggleswitchnormal : styles.toggleswitchalt}
        ></div>
      </div>
    </div>
  );
}

export default DarkToggle;
