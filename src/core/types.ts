export type GameStatus = "HOME" | "SCORES_BOARD" | "READY" | "PLAYING" | "END";
export interface GameState {
  timeoutDuration: number;
  score: number;
  gameStatus: GameStatus;
  firstValue: number;
  secondValue: number;
  sum: number;
}
