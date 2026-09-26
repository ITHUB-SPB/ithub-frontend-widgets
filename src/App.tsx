import { useEffect, useState, useContext } from "react";
import GameScreen from "./screens/game";
import StartScreen from "./screens/start";

import { boardContext } from "./context";
import { checkWinner } from "./lib";
import type { GameState, Board, Players } from "./types";

export default function App() {
  const [gameState, updateGameState] = useState<GameState>("start");
  const [players, setPlayers] = useState<Players | null>(null);
  const { board, updateBoard } = useContext(boardContext);

  useEffect(() => {
    const storagePlayers = localStorage.getItem("xo_players");
    const storageGame = localStorage.getItem("xo_game");

    setPlayers(
      storagePlayers !== null
        ? JSON.parse(storagePlayers)
        : {
            player1: { name: "Игрок 1", color: "salmon" },
            player2: { name: "Игрок 2", color: "magenta" },
          },
    );

    if (storageGame !== null) {
      const storageBoard: Board = JSON.parse(storageGame);
      if (storageBoard.some((cell) => cell !== null)) {
        updateBoard(JSON.parse(storageGame));
        updateGameState("game");
      }
    }
  }, []);

  useEffect(() => {
    if (players) {
      localStorage.setItem("xo_players", JSON.stringify(players));
    }
  }, [players]);

  useEffect(() => {
    if (board) {
      localStorage.setItem("xo_game", JSON.stringify(board));
    }
    console.log(checkWinner(board));
  }, [board]);

  const screens = {
    start: <StartScreen players={players} setPlayers={setPlayers} updateScreen={updateGameState} />,
    game: <GameScreen players={players} updateGameState={updateGameState} />,
    // result: <GameScreen players={players} />,
  };

  return screens[gameState];
}
