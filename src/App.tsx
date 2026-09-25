import { useEffect, useState } from "react"
import GameScreen from "./screens/game"
import StartScreen from "./screens/start"

type GameState = 'start' | 'game' | 'result'

export default function App() {
    const [gameState, updateGameState] = useState<GameState>('start')

    const [players, setPlayers] = useState({
        player1: { name: 'Игрок 1', color: 'salmon' },
        player2: { name: 'Игрок 2', color: 'magenta' }
    })

    useEffect(() => {
        const storageData = localStorage.getItem('xo_players')
        if (storageData) {
            setPlayers(JSON.parse(storageData))
        }
    }, []) // TODO

    useEffect(() => {
        localStorage.setItem('xo_players', JSON.stringify(players))
    }, [players])

    const screens = {
        start: <StartScreen players={players} setPlayers={setPlayers} updateScreen={updateGameState} />,
        game: <GameScreen players={players} />,
        result: <GameScreen />
    }

    return screens[gameState]
}