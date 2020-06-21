export enum Status {
  failure = 'FAILURE',
  success = 'SUCCESS',
}

export interface Result<T> {
  status: Status;
  result?: T;
  error?: T;
}

export interface SuccessResult<T> extends Result<T> {
  status: Status.success;
  result: T;
}

export interface FailureResult<T> extends Result<T> {
  status: Status.failure;
  error: T;
}

export type ConceptResult<S, E> = Promise<SuccessResult<S>|FailureResult<E>>
