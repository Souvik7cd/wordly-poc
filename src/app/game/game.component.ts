import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

enum GameRoundStatusCode {
  wordNotPossible,
  wordPossible,
  wordComplete,
};

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  cursorDefault = "";
  cursor = "";
  word = "";
  checkWordIfLengthGreaterThan = 3;
  gameRoundStatus: number = -1;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.cursor = this.gameService.cursor;
    this.cursorDefault = this.gameService.cursor;
    this.checkKeyPress();
  }

  checkKeyPress() {
    this.gameService.letterSubject?.subscribe({
      next: letter => {
        // check if enter key is pressed
        if (letter == this.gameService.enterKey) {
          // if a letter is typed then only enter key should work
          if (this.cursor !== this.gameService.cursor) {
            this.word += this.cursor;
            if (this.word.length > this.checkWordIfLengthGreaterThan) {
              this.checkWordValidity();
            }
            this.gameService.rotatePlayers(true);
          }
          this.cursor = this.gameService.cursor;
        }
        else {
          this.cursor = letter;
        }
      }
    });
  }

  checkWordValidity() {
    let regex = new RegExp("^" + this.word.toLowerCase());

    const testWord = this.gameService.englishWords.filter(d => regex.test(d))[0];

    if (testWord !== undefined) {
      if (testWord === this.word.toLowerCase()) {
        console.log("complete " + testWord);
        this.gameRoundStatus = GameRoundStatusCode.wordComplete;
        this.cursor = "_";
        alert("Game Over");
        this.word = "";
      }

      else if (testWord.includes(this.word.toLowerCase())) {
        console.log("possible " + testWord);
        this.gameRoundStatus = GameRoundStatusCode.wordPossible;
      }
    }

    else {
      console.log("not possible " + testWord);
      this.gameRoundStatus = GameRoundStatusCode.wordNotPossible;
      alert("Word Not Possible");
    }
  }
}
