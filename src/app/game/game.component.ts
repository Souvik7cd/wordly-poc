import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';
import { LogService } from '../shared/services/log.service';

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
  gameRoundStatus: 'wordNotPossible' | 'wordPossible' | 'wordComplete' = 'wordPossible';

  constructor(
    private gameService: GameService,
    private logService: LogService,
  ) { }

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
            if (this.word.length > 1) {
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

    const testWord = this.gameService.englishWords.filter(d => regex.exec(d))[0];

    if (testWord !== undefined) {
      if (this.word.length > this.checkWordIfLengthGreaterThan) {
        if (testWord === this.word.toLowerCase()) {
          this.logService.log("complete " + testWord);
          this.gameRoundStatus = 'wordComplete';
          this.cursor = "_";
          alert("Game Over");
          this.word = "";
        }
        else if (testWord.includes(this.word.toLowerCase())) {
          this.logService.log("possible " + testWord);
          this.gameRoundStatus = 'wordPossible';
        }
      }
    }
    else {
      if (this.word.length > 1) {
        this.logService.log("not possible " + testWord);
        this.gameRoundStatus = 'wordNotPossible';
      }
    }
  }
}
