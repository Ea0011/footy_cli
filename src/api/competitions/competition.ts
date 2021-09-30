import axiosInstance from '../../config/axios'
import {ApiError} from '../../errors/api'

export const getStandings = async (params: {
  competitionId?: string|number;
}) => {
  try {
    const result = await axiosInstance.get(`competitions/${params.competitionId}/standings`)

    return result.data
  } catch {
    throw new ApiError({key: 'Standings', error: 'SomeError', message: 'HETE'})
  }
}
