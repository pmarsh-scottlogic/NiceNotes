export class Meeter {
  name: string;
  constructor() {
    this.name = "james";
  }

  meet() {
    // code with side effects
    return this.name;
  }
}
