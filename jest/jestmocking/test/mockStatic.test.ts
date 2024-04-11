import { jest, it, expect } from "@jest/globals";

import { Greeter } from "../src/classes/Greeter";
import { wave } from "../src/meetAndGreet";

const mockWave = jest.fn();

jest.mock("../src/classes/Greeter");
Greeter.wave = mockWave;

it("waves", () => {
  mockWave.mockReturnValue("WAVE");

  const val = wave();

  expect(mockWave).toHaveBeenCalled();
  expect(val).toEqual("WAVE");
});
