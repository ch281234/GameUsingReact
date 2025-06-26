
import { useState } from 'react';
import './App.css';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

//function Square({value}){
//   // const [value, setValue] = useState(null);
//   // function handleClick(){
//   //   // console.log("clicked!");
//   //   //on click show "X"
//   //   setValue('X');
//   //   /*
//   //   value stores the value and setValue is a function that can be used to change the value. 
//   //   The null passed to useState is used as the initial value for this state variable, so value here starts off equal to null.

//   //   */

    
//   // }
//   return <button className="square" >{value}</button>
// }


/* 
I want the Square component to “remember” that it got clicked,
 and fill it with an “X” mark. To “remember” things, components use state.
*/

export default function Board(){
  const [xIsNext,setXIsNext ] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
    return;
  }
    const nextSquares = squares.slice();
    if(xIsNext){
         nextSquares[i] = 'X';
    } else{
      nextSquares[i] = 'O';
    }
    setXIsNext(!xIsNext);   
    setSquares(nextSquares);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
  // JavaScript supports closures which means an inner function (e.g. handleClick) has access to variables and functions 
  // defined in an outer function
  // creates an array with nine elements and sets each of them to null

  // return <button className="square">X</button><button className="square">X</button>
  /* Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX Fragment <>...</>? 
  React components need to return a single JSX element and not multiple adjacent JSX elements like two buttons.
  */
   return (
    <>
    <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    
    </>
   );
   
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// The export JavaScript keyword makes this function accessible outside of this file. 
//The default keyword tells other files using your code that it’s the main function in your file.


