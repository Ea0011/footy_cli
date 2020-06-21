import axiosInstance from '../../config/axios'

export const getTodaysFixtures = async (competitions?: string) => {
  const fixtures = await axiosInstance.get('matches', {
    params: {competitions},
  })

  return fixtures.data
}
