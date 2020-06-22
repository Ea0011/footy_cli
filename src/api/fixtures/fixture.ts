import axiosInstance from '../../config/axios'

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
    throw new Error(error.message)
  }
}
