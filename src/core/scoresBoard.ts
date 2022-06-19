const LOCAL_STORAGE_SCORES_BOARD_KEY = "quickMathScoreBoard";
const SCORES_BOARD_MAX_LENGTH = 10;

type ScoreBoard = number[];

class ScoresBoard {
  scoresBoard: ScoreBoard;
  constructor() {
    this.scoresBoard = this.initializeScoresBoard();
  }

  updateScoresBoard(score: number) {
    this.scoresBoard.push(score);
    console.log(this.sanitizeScoresBoard(this.scoresBoard));
    this.scoresBoard = this.sanitizeScoresBoard(this.scoresBoard);
    this.updateLocalStorage(this.scoresBoard);
  }

  // Getters and setters

  get bestScore() {
    return Math.max(...this.scoresBoard);
  }

  // Private methods
  private updateLocalStorage(scoresBoard: ScoreBoard) {
    localStorage.setItem(
      LOCAL_STORAGE_SCORES_BOARD_KEY,
      JSON.stringify(scoresBoard)
    );
  }

  private sanitizeScoresBoard(scoresBoard: ScoreBoard): ScoreBoard {
    return (
      scoresBoard
        .filter((score) => typeof score === "number" && score > 0)
        .sort((a: number, b: number) => {
          // a is smaller than b
          if (a > b) {
            return -1;
          }

          // a is greater than b
          if (a < b) {
            return 1;
          }

          // a must be equal to b
          return 0;
        })
        // Max length of scores score
        .slice(0, SCORES_BOARD_MAX_LENGTH)
    );
  }
  private initializeScoresBoard() {
    // Grab data from local storage
    const scoreBoardInLocalStorage =
      localStorage.getItem(LOCAL_STORAGE_SCORES_BOARD_KEY) || "";
    const scoresBoard = JSON.parse(scoreBoardInLocalStorage);

    if (
      !scoreBoardInLocalStorage || // There's no score board key in the local storage
      !Array.isArray(scoresBoard) // The score board value is not an array
    ) {
      this.updateLocalStorage([]);
      return [];
    }

    // Sanitize scores board and update local storage
    const sanitizedScoresBoard = this.sanitizeScoresBoard(scoresBoard);

    this.updateLocalStorage(sanitizedScoresBoard);

    return sanitizedScoresBoard;
  }
}

const scoresBoard = new ScoresBoard();

export default scoresBoard;
