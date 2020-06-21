import axiosInstance from '../../config/axios'

export const getTodaysFixtures = async () => {
  const fixtures = await axiosInstance.get('matches')

  return fixtures.data
}
