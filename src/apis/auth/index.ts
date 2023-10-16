import axios from 'axios'

import { BASE_URL } from '..'
import { ILoginParam } from 'src/types/account'

// interface ILoginParam {
//   username: string
//   password: string
// }
interface ILoginResponse {
  token: string
}

const login = async (params: ILoginParam) => {
  const formData = new URLSearchParams()
  formData.append('email', params.username)
  formData.append('password', params.password)

  const config = {
    method: 'POST',
    maxBodyLength: Infinity,
    url: `${BASE_URL}/auth/login`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: formData
  }

  try {
    const response = await axios(config)
    const loginRes: ILoginResponse = {
      // username: response.data.username,
      token: response.data.accessToken
    }
    console.log(loginRes)

    return loginRes
  } catch (error) {
    console.error('Đã xảy ra lỗi trong quá trình đăng nhập:', error)
    throw error
  }
}

export { login }