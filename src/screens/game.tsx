import { useState } from "react"
import Board from "../components/board"

type Move = 'x' | 'o'

export default function GameScreen() {
    const [currentMove, updateMove] = useState<Move>('x')

    return (
        <div>
            <h1>XO</h1>

            <section>
                <section>Player 1 (X) {currentMove === 'x' && 'active'}</section>
                <section>Player 2 (O) {currentMove === 'o' && 'active'}</section>
            </section>

            <Board currentMove={currentMove} updateMove={updateMove} />
        </div>
    )
}