import { useState } from "react"
import Board from "../components/board"

type Move = 'x' | 'o'

export default function GameScreen({ players }) {
    const [currentMove, updateMove] = useState<Move>('x')
    const { player1, player2 } = players

    return (
        <div>
            <h1>XO</h1>

            <section>
                <section style={{ backgroundColor: player1.color }}>{player1.name} (X) {currentMove === 'x' && 'active'}</section>
                <section style={{ backgroundColor: player2.color }}>{player2.name} (O) {currentMove === 'o' && 'active'}</section>
            </section>

            <Board currentMove={currentMove} updateMove={updateMove} />
        </div>
    )
}