import styles from "./Stats.module.css";

function Stats({ playerOneWins, playerTwoWins, darkToggle }) {
  return (
    <ul
      className={styles.container}
      id={darkToggle ? styles.containernormal : styles.containeralt}
    >
      <li className={styles.playerOneWins}>{playerOneWins}</li>
      <li className={styles.playerTwoWins}>{playerTwoWins}</li>
    </ul>
  );
}

export default Stats;
