export interface GameState {
  score: number;
  gameStatus: "READY" | "PLAYING" | "END";
  firstValue: number;
  secondValue: number;
  sum: number;
}
