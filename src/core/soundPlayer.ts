// Sound
import correctAnswerSoundFile from "../assets/audio/correct_answer.wav";
import wrongAnswerSoundFile from "../assets/audio/wrong_answer.wav";

class SoundPlayer {
  private correctAnswerSound: HTMLAudioElement;
  private wrongAnswerSound: HTMLAudioElement;

  constructor() {
    this.correctAnswerSound = new Audio(correctAnswerSoundFile);
    this.wrongAnswerSound = new Audio(wrongAnswerSoundFile);
  }

  playCorrectAnswerSound() {
    this.correctAnswerSound.play();
  }

  playWrongAnswerSound() {
    this.wrongAnswerSound.play();
  }
}

// Create a singleton sound player
const soundPlayer = new SoundPlayer();

export default soundPlayer;
