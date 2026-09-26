export type GameState = 'start' | 'game' | 'result'

export type Board = Array<Move | null>

export type Move = 'x' | 'o'

export type Index = number // TODO

export type Player = {
    name: string;
    color: string;
}

export type Players = {
    player1: Player;
    player2: Player;
}
