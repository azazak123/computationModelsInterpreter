export class Token<T extends keyof Grammar | RequiredTokenType> {
  constructor(
    readonly type: T,
    readonly lexeme: string,
    readonly line: number,
    readonly literal: number | string | null
  ) {}
}

export type RequiredTokenType = "EOF";

export type Grammar = Record<number | string | symbol, number | string>;