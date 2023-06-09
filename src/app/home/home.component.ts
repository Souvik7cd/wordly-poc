import { Component, ViewChild } from '@angular/core';
import { NewGameOptionsComponent } from './new-game-options/new-game-options.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('optionsModal') optionsModal?: NewGameOptionsComponent;

  openNewGameOptionsModal() {
    this.optionsModal?.setShowOptions(true);
  }
}
