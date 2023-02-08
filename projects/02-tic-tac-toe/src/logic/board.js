import { WINNER_COMBOS } from "../constant";

export const checkWinnerFrom = (boardToCheck) => {

    // Revision de posiciones ganadoras
    for( const combo of WINNER_COMBOS ) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c] 
      ) {
        return boardToCheck[a]
      };
    }

    return null;
};

  // Funcion que revisa si existe un empate
  export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null )
  };