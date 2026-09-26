import { useState, type Dispatch, type SetStateAction } from "react";
import Board from "../components/board";
import Timer from "../components/timer";
import type { GameState, Move, Players } from "../types";

type GameScreenProps = {
  players: Players | null;
  updateGameState: Dispatch<SetStateAction<GameState>>;
};

export default function GameScreen({ players, updateGameState }: GameScreenProps) {
  const [currentMove, updateMove] = useState<Move>("x");

  return (
    <div>
      <h1>XO</h1>
      <section>
        <section style={{ backgroundColor: players?.player1.color }}>
          {players?.player1.name} (X) {currentMove === "x" && "active"}
        </section>
        <section style={{ backgroundColor: players?.player2.color }}>
          {players?.player2.name} (O) {currentMove === "o" && "active"}
        </section>
      </section>
      <div>
        <Board currentMove={currentMove} updateMove={updateMove} />
        <Timer />
      </div>
      <button onClick={() => updateGameState("start")}>Сбросить игру</button>
    </div>
  );
}
