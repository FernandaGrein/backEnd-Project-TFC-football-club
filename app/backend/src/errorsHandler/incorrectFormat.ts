export default class IncorrectFormat extends Error {
  public status: number;
  constructor(message:string) {
    super(message);
    this.status = 400;
  }
}
