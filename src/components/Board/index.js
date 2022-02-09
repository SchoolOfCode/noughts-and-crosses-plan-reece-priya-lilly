import Square from "../Square";

function Board(props) {
	const { board } = props;

	return (
		<div>
			{board.map((square) => (
				<Square square={square} />
			))}
		</div>
	);
}

export default Board;
