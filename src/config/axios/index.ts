import axios from 'axios'
import * as nconf from 'nconf'

nconf.use('file', {file: 'src/config/football_data/football-api.config.json'})
nconf.load()
const apiKey = nconf.get('apiKey')

const axiosInstance = axios.create({
  baseURL: 'http://api.football-data.org/v2/',
  timeout: 10000,
  headers: {'X-Auth-Token': apiKey},
})

export default axiosInstance
