import axiosInstance from '../../config/axios'

export const getTodaysFixtures = async () => {
  try {
    const fixtures = await axiosInstance.get('matches')
    return fixtures.data
  } catch (error) {
    console.error('FAILED')
  }
}
