const Word = (props : { id : string, x : number, y : number, word : string }) => {
	const onDragStart = (event : React.DragEvent) => {
		event.dataTransfer.setData("text/plain", props.id);
		event.dataTransfer.dropEffect = 'move';
	}

	const onDragEnd = (event : React.DragEvent) => {
		event.preventDefault();
		console.log(event);
	}

	return (
		<div 
			className="word" 
			draggable 
			onDragStart={onDragStart}
			onDragEnd={onDragEnd}
			style={{ left: props.x, top: props.y }}
		>{props.word}</div>
	)
}

export default Word;