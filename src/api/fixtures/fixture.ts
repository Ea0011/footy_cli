import axiosInstance from '../../config/axios'
import {ApiError} from '../../errors/api'

export const getFixtures = async (
  params: {
    dateFrom?: string;
    dateTo?: string;
    competitions?: string;
  }
) => {
  try {
    const fixtures = await axiosInstance.get('matches', {
      params,
    })

    return fixtures.data
  } catch (error) {
    throw new ApiError({key: 'CHANGE', error: 'SOMEERR', message: 'CHANGE'})
  }
}
