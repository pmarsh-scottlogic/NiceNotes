import { Greeter } from "./classes/Greeter";
import { Meeter } from "./classes/Meeter";

function greet() {
  const greeter = new Greeter();
  return greeter.greet();
}

function wave() {
  return Greeter.wave();
}

function meetAndGreet() {
  meet();
  return greet();
}

function meet() {
  const meeter = new Meeter();
  return meeter.meet();
}

export { greet, wave, meet, meetAndGreet };
