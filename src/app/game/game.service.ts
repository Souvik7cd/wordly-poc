import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Player } from '../models/player.model';
import words from '../shared/util/en-dict.json';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private EnglishWords = [...words];
  private GameMode: number = 0; // regular mode

  players: Player[] = [
    { playerId: '#ALCX145', userName: 'Alice' },
    { playerId: '#BOBA214', userName: 'Bob' },
    { playerId: '#RCHD754', userName: 'Rich' },
    { playerId: '#MICS154', userName: 'Michael Scott' },
    { playerId: '#PAMH754', userName: 'Pamela' },
  ];

  private Enter: string = '+';
  private Cursor: string = '_';

  private LetterSubject: Subject<string> = new Subject();
  private PlayerRotationSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  get enterKey() {
    return this.Enter;
  }
  get cursor() {
    return this.Cursor;
  }
  get englishWords() {
    return this.EnglishWords;
  }
  get letterSubject() {
    return this.LetterSubject.asObservable();
  }
  get playerRotationSubject() {
    return this.PlayerRotationSubject.asObservable();
  }
  get gameMode() {
    return this.GameMode;
  }
  set gameMode(gameMode: number) {
    this.GameMode = gameMode;
  }

  public nextLetter(letter: string) {
    this.LetterSubject.next(letter);
  }

  public nextPlayers(isPlayersRotated: boolean) {
    this.PlayerRotationSubject.next(isPlayersRotated);
  }

  public rotatePlayers(reverse = false) {
    // Remove first element from array and store in variable
    // If first element is not undefined, push it to the end of array
    if (reverse) {
      const lastElement = this.players.shift();

      if (lastElement) {
        this.players.push(lastElement);
        this.nextPlayers(true);
      }
    }

    // Remove last element from array and store in variable
    // If last element is not undefined, push it to the front of array
    else {
      const firstElement = this.players.pop();
      if (firstElement) {
        this.players.unshift(firstElement);
        this.nextPlayers(true);
      }
    }
  }
}
