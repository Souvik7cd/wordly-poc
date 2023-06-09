import { Component, Input } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';
import { LogService } from 'src/app/shared/services/log.service';

@Component({
  selector: 'app-new-game-options',
  templateUrl: './new-game-options.component.html',
  styleUrls: ['./new-game-options.component.scss']
})
export class NewGameOptionsComponent {

  showOptions: boolean = false;
  newGameOptions: any = {
    mode: 'regular',
    players: 4,
    rounds: 4
  }

  constructor(private logService: LogService, private router: Router) { }

  setShowOptions(bool: boolean) {
    this.showOptions = bool;
  }

  startGame() {
    const extras: NavigationExtras = {
      queryParams: this.newGameOptions
    }
    this.router.navigate(['/game'], extras);
  }
}
