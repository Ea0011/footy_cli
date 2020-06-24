import {StandardError} from '../standard-error'

export class ApiError extends StandardError {
  readonly key: string;

  constructor(errorDetails: {key: string; error: string; message: string}) {
    super(errorDetails)
    this.key = errorDetails.key
  }
}
