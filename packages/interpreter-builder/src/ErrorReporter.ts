export default interface ErrorReporter {
  emitError(line: number, msg: string): void;
  isError(): boolean;
}
