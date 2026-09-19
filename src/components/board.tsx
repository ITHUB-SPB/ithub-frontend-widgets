import { useState } from "react"
import classes from './board.module.css'

type Move = 'x' | 'o'
type Board = Array<Move | null>
type Index = number // TODO

function checkWinner(board: Board, player: Move): Move | null {
    if (board[0] && board[0] === board[1] && board[1] === board[2]) {
        return player
    }

    return null
}

export default function Board() {
    const [currentMove, updateMove] = useState<Move>('x')

    const [board, updateBoard] = useState<Board>(Array(9).fill(null))

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