import React, { useState } from 'react';
import './App.css';
import confetti from 'canvas-confetti';
import { Square } from './components/Square';
import { TURNS } from './constant';
import { checkWinnerFrom, checkEndGame } from './logic/board';
import { WinnerModal } from './components/WinnerModal';


export const App = () => {

  // Estado del tablero
  const [board, setBoard] = useState(Array(9).fill(null));

  // Estado del turno
  const [turn, setTurn] = useState(TURNS.X);

  // Estado del ganador
  const [winner, setWinner] = useState(null);

  // Funcion que reseta el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  };

  // funcion que se encarga en manejar el estado del juego
  const updateBoard = (index) => {

    // la posicion no se actualiza si ya existe un indice en el contenedor
    if(board[index] || winner) return

    // para actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // para cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //Revisar el ganador y el else if mira por si existe un empate
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    };

  };

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame
      }>Reset Game</button>
      <section className='game'>
          {
            board.map((square, index) => {
              return (
                <Square 
                    key={index} 
                    index={index}
                    updateBoard={updateBoard}>
                  {square} 
                </Square>
              )
            })
          }
      </section>

      <section className='turn'>
          <Square isSelected={turn === TURNS.X}>
            {TURNS.X}
          </Square>

          <Square isSelected={turn === TURNS.O}>
            {TURNS.O}
          </Square>

      </section>

      <WinnerModal resetGame={resetGame} winner={winner}/>

    </main>
  )
};
