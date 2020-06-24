export class ValidationError {
  readonly key: string;

  readonly error: string;

  readonly message: string;

  constructor(field: string, error: string, message: string) {
    this.key = field
    this.error = error
    this.message = message
  }
}
