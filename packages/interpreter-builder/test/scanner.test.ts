import { expect, describe, it } from "vitest";
import Scanner from "../src/Scanner";

describe("Scanner", () => {
  describe("Single character lexemes", () => {
    enum Grammar {
      LEFT_PAREN = "(",
      RIGHT_PAREN = ")",
      LEFT_BRACE = "{",
      RIGHT_BRACE = "}",
      LEFT_BRACKET = "[",
      RIGHT_BRACKET = "]",
      COMA = ",",
      DOT = ".",
      PLUS = "+",
      MINUS = "-",
      SEMICOLON = ";",
      START = "*",
      SLASH = "/",
    }

    it("Right grammar", () => {
      const source = "(+){{}-.;[]*/,";

      const scanner = new Scanner(source, Grammar);

      expect(scanner.scan()?.map((token) => token.type)).toStrictEqual([
        Grammar.LEFT_PAREN,
        Grammar.PLUS,
        Grammar.RIGHT_PAREN,
        Grammar.LEFT_BRACE,
        Grammar.LEFT_BRACE,
        Grammar.RIGHT_BRACE,
        Grammar.MINUS,
        Grammar.DOT,
        Grammar.SEMICOLON,
        Grammar.LEFT_BRACKET,
        Grammar.RIGHT_BRACKET,
        Grammar.START,
        Grammar.SLASH,
        Grammar.COMA,
        "EOF",
      ]);

      expect(scanner.errorReporter.isError()).toBe(false);
    });

    it("Wrong grammar", () => {
      const source = "-+\n:";

      const scanner = new Scanner(source, Grammar);

      expect(scanner.scan()?.map((token) => token.type)).toStrictEqual([
        Grammar.MINUS,
        Grammar.PLUS,
        "EOF",
      ]);

      expect(scanner.errorReporter.isError()).toBe(true);
    });
  });
});
