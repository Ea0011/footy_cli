export class StandardError {
  readonly error: string;

  readonly message: string;

  constructor(errorDetails: {error: string; message: string}) {
    this.error = errorDetails.error
    this.message = errorDetails.message
  }
}
