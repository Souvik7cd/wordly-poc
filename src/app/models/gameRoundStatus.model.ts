export class GameRoundStatusCode {
  private static WordPossible: string = "wordPossible";
  private static WordNotPossible: string = "wordNotPossible";
  private static WordComplete: string = "wordComplete";

  public static get wordPossible() {
    return this.WordPossible;
  }
  public static get wordNotPossible() {
    return this.WordNotPossible;
  }
  public static get wordComplete() {
    return this.WordComplete;
  }
}
