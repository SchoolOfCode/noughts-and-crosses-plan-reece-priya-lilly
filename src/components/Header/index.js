import styles from "./Header.module.css";

function Header({ darkToggle }) {
  return (
    <h1
      className={styles.header}
      id={darkToggle ? styles.headernormal : styles.headeralt}
    >
      Welcome to "Crosses and Noughts"!
    </h1>
  );
}

export default Header;
