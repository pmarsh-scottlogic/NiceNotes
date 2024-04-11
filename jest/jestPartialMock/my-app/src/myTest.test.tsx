import { PromptTemplate } from "langchain/prompts";

const mockFromTemplate = jest.fn(() => "");

// mock PromptTemplate.fromTemplate static method
jest.mock("langchain/prompts", () => {
  return {
    PromptTemplate: {
      fromTemplate: mockFromTemplate,
    },
  };
});

test("mocked module method is called", () => {
  const pt = PromptTemplate.fromTemplate("test");
  expect(mockFromTemplate).toBeCalledTimes(1);
});
