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

  describe("Comments", () => {
    enum Grammar {
      LEFT_PAREN = "(",
      RIGHT_PAREN = ")",
    }

    it("One-line comment", () => {
      const source = "(()(\n//:\n)";

      const scanner = new Scanner(source, Grammar);

      expect(scanner.scan()?.map((token) => token.type)).toStrictEqual([
        Grammar.LEFT_PAREN,
        Grammar.LEFT_PAREN,
        Grammar.RIGHT_PAREN,
        Grammar.LEFT_PAREN,
        Grammar.RIGHT_PAREN,
        "EOF",
      ]);

      expect(scanner.errorReporter.isError()).toBe(false);
    });

    it("Last-line comment", () => {
      const source = "(()(\n//:)";

      const scanner = new Scanner(source, Grammar);

      expect(scanner.scan()?.map((token) => token.type)).toStrictEqual([
        Grammar.LEFT_PAREN,
        Grammar.LEFT_PAREN,
        Grammar.RIGHT_PAREN,
        Grammar.LEFT_PAREN,
        "EOF",
      ]);

      expect(scanner.errorReporter.isError()).toBe(false);
    });
  });

  describe("Special characters", () => {
    enum Grammar {
      PLUS = "+",
      MINUS = "-",
    }

    it("Space", () => {
      const source = "+ -";

      const scanner = new Scanner(source, Grammar);

      expect(scanner.scan()?.map((token) => token.type)).toStrictEqual([
        Grammar.PLUS,
        Grammar.MINUS,
        "EOF",
      ]);

      expect(scanner.errorReporter.isError()).toBe(false);
    });

    it("Tabulation", () => {
      const source = "+\t-";

      const scanner = new Scanner(source, Grammar);

      expect(scanner.scan()?.map((token) => token.type)).toStrictEqual([
        Grammar.PLUS,
        Grammar.MINUS,
        "EOF",
      ]);

      expect(scanner.errorReporter.isError()).toBe(false);
    });
  });

  describe("String literals", () => {
    enum Grammar {
      PLUS = "+",
      MINUS = "-",
    }

    it("One literal", () => {
      const source = '+"one"-';

      const scanner = new Scanner(source, Grammar);
      const tokens = scanner.scan();
      expect(tokens).not.toBeNull();

      expect(tokens?.map((token) => token.type)).toStrictEqual([
        Grammar.PLUS,
        "STRING",
        Grammar.MINUS,
        "EOF",
      ]);

      expect(
        tokens?.filter((token) => token.literal).map((token) => token.literal)
      ).toStrictEqual(["one"]);

      expect(scanner.errorReporter.isError()).toBe(false);
    });

    it("Two literals", () => {
      const source = '"one"-\n+\n"two"';

      const scanner = new Scanner(source, Grammar);
      const tokens = scanner.scan();
      expect(tokens).not.toBeNull();

      expect(tokens?.map((token) => token.type)).toStrictEqual([
        "STRING",
        Grammar.MINUS,
        Grammar.PLUS,
        "STRING",
        "EOF",
      ]);

      expect(
        tokens?.filter((token) => token.literal).map((token) => token.literal)
      ).toStrictEqual(["one", "two"]);

      expect(scanner.errorReporter.isError()).toBe(false);
    });

    it("Unterminated literal", () => {
      const source = '-\n+\n"text';

      const scanner = new Scanner(source, Grammar);
      const tokens = scanner.scan();
      expect(tokens).not.toBeNull();

      expect(tokens?.map((token) => token.type)).toStrictEqual([
        Grammar.MINUS,
        Grammar.PLUS,
        "STRING",
        "EOF",
      ]);

      expect(
        tokens?.filter((token) => token.literal).map((token) => token.literal)
      ).toStrictEqual(["text"]);

      expect(scanner.errorReporter.isError()).toBe(true);
    });
  });
});
