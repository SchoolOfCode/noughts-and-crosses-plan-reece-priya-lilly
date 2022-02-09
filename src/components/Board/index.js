import Square from "../Square";

function Board(props) {
  const { board, makeAMove } = props;

  return (
    <div>
      {board.map((square, index) => (
        <Square square={square} key={index} makeAMove={makeAMove} />
      ))}
    </div>
  );
}

export default Board;
