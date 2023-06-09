/* export class WordlyGame {

  public gameModeID: number
  public gameModeName: string;
  public gameModeDescription: string;
  public checkWordIfLengthGreaterThan: number;
  public shouldMatchPrefix: boolean;
  public shouldMatchSuffix: boolean;

  constructor(
    gameModeID: 0 | 1 | 2,
    gameModeName: 'Regular' | 'Reversed' | 'Alternating',
    gameModeDescription: string,
    checkWordIfLengthGreaterThan: number,
    shouldMatchPrefix: boolean = true,
    shouldMatchSuffix: boolean = false
  ) {
    this.gameModeID = gameModeID;
    this.gameModeName = gameModeName;
    this.gameModeDescription = gameModeDescription;
    this.checkWordIfLengthGreaterThan = checkWordIfLengthGreaterThan;
    this.shouldMatchPrefix = shouldMatchPrefix;
    this.shouldMatchSuffix = shouldMatchSuffix;
  }
} */

interface WordlyGame {
  gameModeID: number
  gameModeName: string;
  gameModeDescription: string;
  checkWordIfLengthGreaterThan: number;
  shouldMatchPrefix?: boolean;
  shouldMatchSuffix?: boolean;
}

export class RegularWordlyGame implements WordlyGame {
  gameModeID = 0;
  gameModeName = 'Regular';
  gameModeDescription = '';
  shouldMatchPrefix = true;
  checkWordIfLengthGreaterThan: number;

  constructor(checkWordIfLengthGreaterThan: number) {
    this.checkWordIfLengthGreaterThan = checkWordIfLengthGreaterThan;
  }
}
