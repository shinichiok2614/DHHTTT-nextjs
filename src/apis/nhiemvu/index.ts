import axios from 'axios'
import { BASE_URL } from '..'

export const getNhiemVu = async () => {
  const data = await axios.get(`${BASE_URL}/nhiemvu`)
  return data
}
