import { MoveFuncType } from "../App";

const Board = (props : { moveWord : MoveFuncType, children : JSX.Element | JSX.Element[] }) => {
	const onDragOver = (ev : React.DragEvent) => {
		ev.preventDefault();
		ev.dataTransfer.dropEffect = 'move';
	}

	const onDrop = (ev : React.DragEvent) => {
		ev.preventDefault();
		props.moveWord(ev.dataTransfer.getData('text/plain'), ev.pageX, ev.pageY);
	}

	return (
		<div
			id="game-board"
			className="board" 
			onDragOver={onDragOver}
			onDrop={onDrop}
		>
			{props.children}
		</div>
	);

}

export default Board;