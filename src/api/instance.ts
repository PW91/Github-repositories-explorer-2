import axios from 'axios'
import { API_URL } from './consts'

export const useApiInstance = () => axios.create({ baseURL: API_URL })
