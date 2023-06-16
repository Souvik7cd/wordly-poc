import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';
import { LogService } from '../shared/services/log.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GameOptions } from '../models/gameOptions.model';
import { Player } from '../models/player.model';
import { GameRoundStatusCode } from '../models/gameRoundStatus.model';
import { WordlyGame } from '../models/gameMode.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  cursorDefault: string = "";
  cursor: string = "";
  word: string = "";
  checkWordIfLengthGreaterThan: number = 3;
  gameRoundStatusArr: string[] = [];
  gameRound = 1;
  scorePerLetter = 2;

  currentPlayer?: Player;

  constructor(
    private gameService: GameService,
    private logService: LogService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const gameOptions: GameOptions = this.route.snapshot.queryParams;

    // if query params are missing go back to home page
    if (!(gameOptions.mode && gameOptions.players && gameOptions.rounds)) {
      this.router.navigate(['/home']);
    }

    this.gameService.currentPlayerSubject.subscribe(currentPlayer => {
      this.currentPlayer = currentPlayer;
    })

    this.gameService.resetPlayers();
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

            this.checkWordValidity();
            this.applyGameRules();

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
          this.gameRoundStatusArr.push(GameRoundStatusCode.wordComplete);
        }
      }
      else if (testWord.includes(this.word.toLowerCase())) {
        this.logService.log("possible " + testWord);
        this.gameRoundStatusArr.push(GameRoundStatusCode.wordPossible);
      }
    }
    else {
      this.logService.log("not possible " + testWord);
      this.gameRoundStatusArr.push(GameRoundStatusCode.wordNotPossible);
    }

    this.logService.log(this.gameRoundStatusArr);
  }

  applyGameRules() {
    const lastStatus = this.gameRoundStatusArr.length - 1;

    /* Game Over Logic */

    if (this.gameRoundStatusArr[lastStatus] === GameRoundStatusCode.wordComplete || (
      this.gameRoundStatusArr[lastStatus] === GameRoundStatusCode.wordNotPossible &&
      this.gameRoundStatusArr[lastStatus - 1] === GameRoundStatusCode.wordNotPossible
    )
    ) {
      /* Reset of score of current player */
      if (this.currentPlayer) {
        this.gameService.setScore(
          this.currentPlayer.playerId,
          this.currentPlayer.previousScore
        );
      }
      this.setGameOver();
      return;
    }

    /* Score Logic */
    /* Only add score if word is possible */
    if (this.gameRoundStatusArr[lastStatus] === GameRoundStatusCode.wordPossible) {
      if (this.currentPlayer) {
        this.gameService.addScore(this.currentPlayer.playerId, this.scorePerLetter);
      }
    }
  }

  setGameOver() {
    this.cursor = "_";
    alert(`Round ${this.gameRound} Over`);
    this.word = "";
    this.gameRound++;
    this.gameRoundStatusArr = [];
    this.showRoundResults();
  }

  showRoundResults() {
    // Currently display in log
    const players = this.gameService.playersInOrder;
    players.forEach(player => {
      player.previousScore = player.currentScore;
      this.logService.log(player.userName + " - " + player.currentScore);
    });
  }
}
