export class WordlyGame {
  private static GameModeID = 0;
  private static GameModeName = 'Regular';
  private static GameModeDescription = '';
  private static ShouldMatchPrefix = true;
  private static CheckWordIfLengthGreaterThan = 3;

  public static get gameModeID() {
    return this.GameModeID;
  }
  public static get gameModeName() {
    return this.GameModeName;
  }
  public static get gameModeDescription() {
    return this.GameModeDescription;
  }
  public static get shouldMatchPrefix() {
    return this.ShouldMatchPrefix;
  }
  public static get checkWordIfLengthGreaterThan() {
    return this.CheckWordIfLengthGreaterThan;
  }
  public static set checkWordIfLengthGreaterThan(length: number) {
    this.CheckWordIfLengthGreaterThan = length;
  }
}
