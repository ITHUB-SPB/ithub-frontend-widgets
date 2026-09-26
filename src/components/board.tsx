import { useState, type Dispatch, type SetStateAction } from "react"
import classes from './board.module.css'
import type { Board, Move, Index } from "../types"

type BoardProps = {
    currentMove: Move,
    updateMove: Dispatch<SetStateAction<Move>>,
    board: Board,
    updateBoard: Dispatch<SetStateAction<Board>>,
}

function checkWinner(board: Board, player: Move): Move | null {
    if (board[0] && board[0] === board[1] && board[1] === board[2]) {
        return player
    }

    return null
}

export default function Board({ currentMove, updateMove, board, updateBoard }: BoardProps) {
    const handleClick = (fieldIndex: Index) => {
        updateBoard(state => {
            return [
                ...state.slice(0, fieldIndex),
                currentMove,
                ...state.slice(fieldIndex + 1)
            ]
            // const newState = [...state]
            // newState[fieldIndex] = currentMove
            // return newState
        })

        const winner = checkWinner(board, currentMove)

        if (winner) {
            console.log(`winner: ${winner}`)
            return
        }

        updateMove(state => state === 'o' ? 'x' : 'o')
    }

    return (
        <main className={classes.board}>
            {board.map(
                (field, ix) =>
                    <button
                        className={classes.field}
                        onClick={() => handleClick(ix)}
                        disabled={Boolean(field)}
                    >
                        {field}
                    </button>
            )}
        </main>
    )
}