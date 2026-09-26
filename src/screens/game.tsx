import { useState } from "react";
import Board from "../components/board";
import type { Move, Players } from "../types";

type GameScreenProps = {
  players: Players | null;
};

export default function GameScreen({ players }: GameScreenProps) {
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
      <Board currentMove={currentMove} updateMove={updateMove} />
    </div>
  );
}
