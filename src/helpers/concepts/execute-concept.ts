import {ConceptResult, Status} from '../../types/concepts'

export const executeConcept = async <S, E>(
  conceptResult: ConceptResult<S, E>,
  onSuccess: (p: S) => void,
  onError: (p: E) => void,
) => {
  const result = await conceptResult

  switch (result.status) {
  case Status.success: {
    onSuccess(result.result)
    break
  }
  case Status.failure: {
    onError(result.error)
  }
  }
}
