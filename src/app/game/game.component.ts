import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  cursorDefault = "";
  cursor = "";
  word = "";

  constructor(private gameService: GameService) {
    this.cursor = this.gameService.cursor;
    this.cursorDefault = this.gameService.cursor;
  }

  ngOnInit(): void {
    this.gameService.letterSubject?.subscribe({
      next: letter => {

        if (letter == this.gameService.enterKey) {

          // if a letter is typed then only enter key should work
          if(this.cursor !== this.gameService.cursor) {
            this.word += this.cursor;

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
}
