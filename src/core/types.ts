export interface GameState {
  timeoutDuration: number;
  score: number;
  gameStatus: "READY" | "PLAYING" | "END";
  firstValue: number;
  secondValue: number;
  sum: number;
}
