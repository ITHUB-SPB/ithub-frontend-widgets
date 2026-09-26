import type { Board, Move } from "./types";

export function checkWinner(board: Board): Move | null {
  if (board[0] && board[0] === board[1] && board[1] === board[2]) {
    return board[0];
  }

  return null;
}
