import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player.model';
import { GameService } from '../game.service';
import { LogService } from 'src/app/shared/services/log.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  dispPlayers: Player[] = [];

  constructor(
    private gameService: GameService,
    private logService: LogService,
  ) { }

  ngOnInit(): void {
    const initialRotations = 2;

    for (let i = 0; i < initialRotations; i++) {
      this.gameService.rotatePlayers(true);
    }

    this.dispPlayers = this.gameService.players.slice(-3);
    this.gameService.nextPlayers(false);

    this.gameService.playerRotationSubject.subscribe({
      next: isPlayersRotated => {
        if (isPlayersRotated) {
          this.dispPlayers = this.gameService.players.slice(-3);
          this.gameService.nextPlayers(false);
        }
      }
    });
  }
}
