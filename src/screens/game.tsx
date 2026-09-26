import { useState, useEffect, type Dispatch, type SetStateAction } from "react"
import Board from "../components/board"
import type { Move, Players, Board as BoardType } from "../types"

type GameScreenProps = {
    players: Players,
    board: BoardType,
    updateBoard: Dispatch<SetStateAction<BoardType>>,
}

export default function GameScreen({ players, board, updateBoard }: GameScreenProps) {
    const [currentMove, updateMove] = useState<Move>('x')
    const { player1, player2 } = players

    return (
        <div>
            <h1>XO</h1>
            <section>
                <section style={{ backgroundColor: player1.color }}>{player1.name} (X) {currentMove === 'x' && 'active'}</section>
                <section style={{ backgroundColor: player2.color }}>{player2.name} (O) {currentMove === 'o' && 'active'}</section>
            </section>
            <Board board={board} updateBoard={updateBoard} currentMove={currentMove} updateMove={updateMove} />
        </div>
    )
}