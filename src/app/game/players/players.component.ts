import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent {
  players = [
    { playerId: '#SAMX145', username: 'Alice', turn: true },
    { playerId: '#SAMX145', username: 'Bob', turn: false },
    { playerId: '#SAMX145', username: 'Rich', turn: false },
  ];
  turns = [1, 0, 0];
}
