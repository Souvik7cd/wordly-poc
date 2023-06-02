import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private Enter: string = '+';
  private Cursor: string = '_';

  private LetterSubject: Subject<string> = new Subject();

  constructor() { }

  get enterKey() {
    return this.Enter;
  }
  get cursor() {
    return this.Cursor;
  }
  get letterSubject() {
    return this.LetterSubject.asObservable();
  }

  public nextLetter(letter: string) {
    this.LetterSubject.next(letter);
  }
}
