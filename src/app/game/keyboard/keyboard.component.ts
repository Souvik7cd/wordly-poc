import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {

  keys = [
    [ 'Q', 	'W', 	'E', 	'R', 	'T', 	'Y', 	'U', 	'I', 	'O', 	'P' ],
    [ 'A', 	'S', 	'D', 	'F', 	'G', 	'H', 	'J', 	'K', 	'L' ],
    [ 'Z', 	'X', 	'C', 	'V', 	'B', 	'N', 	'M' ]
  ];

  constructor(private gameService: GameService) {}

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
