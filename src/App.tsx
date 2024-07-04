import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import Word from './components/Word';

function App() {

	const [wordsOnBoard, setWordsOnBoard] = useState([
		{word: 'water', x: 100, y: 100, id: 'df'}
	] as WordType[]);

	const moveWord = (id : string, newX : number, newY : number) => {
		console.log(id, newX, newY);
		setWordsOnBoard(arr => arr.map(el => el.id === id ? {...el, x: newX, y: newY} : el));
	}

	return (
		<Board moveWord={moveWord}>
			{wordsOnBoard.filter(el => el.x && el.y).map(el => <Word key={el.id} id={el.id} word={el.word} x={el.x || 0} y={el.y || 0} />)}
		</Board>
	)
}

type WordType = {
	id : string,
	word : string,
	x? : number,
	y? : number,
}

export type MoveFuncType = (id : string, newX : number, newY : number) => void;


export default App;