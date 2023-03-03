import ConsoleErrorReporter from "./ConsoleErrorReporter";
import ErrorReporter from "./ErrorReporter";
import { Token, RequiredTokenType, Grammar } from "./token";

type TokenType<T> = keyof T | RequiredTokenType;

export default class Scanner<T extends Grammar> {
  private line = 1;
  private start = 0;
  private current = 0;
  private tokens: Token<TokenType<T>>[] = [];

  constructor(
    readonly source: string,
    readonly tokenTypes: T,
    readonly errorReporter: ErrorReporter = new ConsoleErrorReporter()
  ) {}

  public scan(): Token<TokenType<T>>[] {
    while (!this.isEnd()) {
      this.start = this.current;
      this.scanToken();
    }

    this.tokens.push(new Token("EOF", "", this.line, null));

    return this.tokens;
  }

  scanToken() {
    const char = this.consume();

    switch (char) {
      case "\n": {
        this.line++;
        break;
      }

      case "/": {
        if (this.match("/")) {
          while (this.peek() !== "\n" && this.peek() !== "\0") this.consume();
          break;
        }
        this.analyzeChar(char);
        break;
      }

      default: {
        this.analyzeChar(char);
      }
    }
  }

  analyzeChar(char: string) {
    const tokenType = this.lexemeToToken(char);

    if (!tokenType) {
      this.errorReporter.emitError(this.line, "Unexpected character");
    } else {
      this.addToken(tokenType, null);
    }
  }

  lexemeToToken(lexeme: string): keyof T | null {
    for (const key in this.tokenTypes) {
      if (lexeme === this.tokenTypes[key]) {
        return key;
      }
    }

    return null;
  }

  isEnd(): boolean {
    return this.current >= this.source.length;
  }

  consume(): string {
    return this.source[this.current++] as string;
  }

  addToken(type: keyof T, literal: number | string | null) {
    const lexeme = this.source.slice(this.start, this.current);

    this.tokens.push(
      new Token(this.tokenTypes[type], lexeme, this.line, literal)
    );
  }

  peek(): string {
    if (this.isEnd()) return "\0";
    return this.source[this.current] as string;
  }

  match(expected: string) {
    if (this.peek() !== expected) return false;

    this.current++;
    return true;
  }
}
