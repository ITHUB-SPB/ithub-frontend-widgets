import { useState } from "react"
import GameScreen from "./screens/game"

type GameState = 'start' | 'game' | 'result'

export default function App() {
    const [gameState, updateGameState] = useState<GameState>('start')

    const screens = {
        start: <GameScreen />,
        game: <GameScreen />,
        result: <GameScreen />
    }

    return screens[gameState]
}