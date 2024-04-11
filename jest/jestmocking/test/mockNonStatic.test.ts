import { jest, it, expect } from "@jest/globals";

import { greet } from "../src/meetAndGreet";

const mockGreet = jest.fn();

jest.mock("../src/classes/Greeter", () => {
  return {
    Greeter: jest.fn().mockImplementation(() => {
      return {
        greet: mockGreet,
      };
    }),
  };
});

it("greets", () => {
  mockGreet.mockReturnValue("MESSAGE");

  const val = greet();

  expect(mockGreet).toHaveBeenCalled();
  expect(val).toEqual("MESSAGE");
});
