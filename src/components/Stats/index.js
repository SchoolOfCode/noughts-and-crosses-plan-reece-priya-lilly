import styles from "./Stats.module.css";

function Stats({ playerOneWins, playerTwoWins, darkToggle }) {
  return (
    <div className={styles.statcontainer}>
      <ul
        className={styles.container}
        id={darkToggle ? styles.containernormal : styles.containeralt}
      >
        <li id={styles.playerOneWins} className={styles.statone}>
          {playerOneWins}
        </li>
        <li id={styles.playerTwoWins} className={styles.stattwo}>
          {playerTwoWins}
        </li>
      </ul>
    </div>
  );
}

export default Stats;
