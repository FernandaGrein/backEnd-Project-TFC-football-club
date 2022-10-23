export default class InvalidFields extends Error {
  public status: number;
  constructor(message:string) {
    super(message);
    this.status = 401;
  }
}
