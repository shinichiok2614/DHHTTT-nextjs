import axios from 'axios'
import { clearToken, clearUserInfo, getToken } from 'src/helpers/storage'

const BASE_URL = 'http://localhost:3002'

export { BASE_URL }

axios.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }

    return config
  },
  err => {
    Promise.reject(err)
  }
)

axios.interceptors.response.use(undefined, err => {
  // console.log(err.response)
  if (err.response.status === 401) {
    clearUserInfo()
    clearToken()
    window.location.href = '/pages/login'
  }

  // return err
})
