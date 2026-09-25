import type { SubmitEvent } from "react"

type Player = {
    name: string;
    color: string;
}

type Players = {
    player1: Player;
    player2: Player;
}

type StartScreenProps = {
    players: Players;
    setPlayers: any;
    updateScreen: any;
}

export default function StartScreen({ players, setPlayers, updateScreen }: StartScreenProps) {
    const handleSubmit = (event: SubmitEvent) => {
        event.preventDefault()
        event.stopPropagation()

        const data = new FormData(event.target)

        setPlayers({
            player1: {
                name: data.get('namePlayer1'),
                color: data.get('colorPlayer1')
            },
            player2: {
                name: data.get('namePlayer2'),
                color: data.get('colorPlayer2')
            }
        })

        updateScreen('game')
    }

    return (
        <form action="" method="post" onSubmit={handleSubmit}>
            <h2>Стартовый экран</h2>
            <section>
                <input type="text" name="namePlayer1" placeholder="Игрок 1" required />
                <input type="color" name="colorPlayer1" />
            </section>
            <section>
                <input type="text" name="namePlayer2" placeholder="Игрок 2" required />
                <input type="color" name="colorPlayer2" />
            </section>
            <button type="submit">Начать</button>
        </form>
    )
}