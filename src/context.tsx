import {
  createContext,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from "react";
import type { Board } from "./types";

export const boardContext = createContext<{
  board: Board;
  updateBoard: Dispatch<SetStateAction<Board>>;
}>(undefined!);

export function BoardContext({ children }: PropsWithChildren) {
  const [board, updateBoard] = useState<Board>(Array(9).fill(null));

  return <boardContext.Provider value={{ board, updateBoard }}>{children}</boardContext.Provider>;
}
