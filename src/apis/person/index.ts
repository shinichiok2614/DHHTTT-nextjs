import axios from 'axios'
import { BASE_URL } from '..'

export const getPersonInfo = () => {
  return axios.get(`${BASE_URL}/person`).then(res => {
    return res.data
  })
}
