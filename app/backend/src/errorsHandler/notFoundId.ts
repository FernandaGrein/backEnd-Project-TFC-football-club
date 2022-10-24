export default class NotFoundId extends Error {
  public status: number;
  constructor(message:string) {
    super(message);
    this.status = 404;
  }
}
