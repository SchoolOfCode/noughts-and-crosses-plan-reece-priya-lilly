import styles from "./SubHeading.module.css";

function SubHeading({ winner, darkToggle }) {
  return (
    <div id={darkToggle ? styles.normal : styles.alt}>
      {winner ? <h1>{winner} Wins!</h1> : null}
    </div>
  );
}

export default SubHeading;
