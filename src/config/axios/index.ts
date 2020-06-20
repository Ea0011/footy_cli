import axios from 'axios'
import footballDataConfig from '../football_data/football-data.config'

const axiosInstance = axios.create({
  baseURL: 'http://api.football-data.org/v2/',
  timeout: 3000,
  headers: {'X-Auth-Token': footballDataConfig.apiKey},
})

export default axiosInstance
