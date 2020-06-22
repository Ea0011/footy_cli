import {StandardError} from '../error'

export interface ValidationError extends StandardError {
  field: string;
}
