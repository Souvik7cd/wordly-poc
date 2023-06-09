import { Component } from '@angular/core';
import { GameService } from '../game.service';
import { LogService } from 'src/app/shared/services/log.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {

  private Keys = [
    [ 'Q', 	'W', 	'E', 	'R', 	'T', 	'Y', 	'U', 	'I', 	'O', 	'P' ],
    [ 'A', 	'S', 	'D', 	'F', 	'G', 	'H', 	'J', 	'K', 	'L' ],
    [ 'Z', 	'X', 	'C', 	'V', 	'B', 	'N', 	'M' ]
  ];

  get keys() {
    return this.Keys;
  }

  constructor(
    private gameService: GameService,
    private logService: LogService,
  ) {}

  onLetterKeyClick(letter: string) {
    this.gameService.nextLetter(letter);
  }

  onEnterKeyClick() {
    this.gameService.nextLetter(this.gameService.enterKey);
  }

  onBKSPKeyClick() {
    this.gameService.nextLetter(this.gameService.cursor);
  }
}
