export class Greeter {
  greeting: string;

  constructor() {
    this.greeting = "message";
  }

  static wave() {
    return "wave";
  }

  greet() {
    return this.greeting;
  }
}
