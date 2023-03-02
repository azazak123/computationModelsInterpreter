import ErrorReporter from "./ErrorReporter";

export default class ConsoleErrorReporter implements ErrorReporter {
  private hadError = false;

  emitError(line: number, msg: string) {
    this.reportError(line, msg);
    this.hadError = true;
  }

  reportError(line: number, msg: string) {
    console.error(`[Line: ${line}]: Error: ${msg}.`);
  }

  isError(): boolean {
    return this.hadError;
  }
}
