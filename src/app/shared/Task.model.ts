export class Task {
  public description: string;
  public status: boolean;

  constructor(description: string, status: boolean) {
    this.description = description;
    this.status = status;
  }
}
