import styles from "./Square.module.css";

function Square(props) {
  const { square, makeAMove } = props;
  return (
    <div className={styles.square} onClick={makeAMove}>
      {square}
    </div>
  );
}

export default Square;
