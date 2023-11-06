import axios from 'axios'
import { BASE_URL } from '..'
import IAccountInfo from 'src/types/account'

const updateUser = async (params: IAccountInfo) => {
  console.log('updateUserNext')
  console.log(params.email)
  console.log(params.firstName)
  console.log(params.lastName)
  const formData = new URLSearchParams()
  formData.append('email', params.email)
  formData.append('firstName', params.firstName)
  formData.append('lastName', params.lastName)
  formData.append('phone', params.phone)
  formData.append('dateofbirth', params.dateofbirth)
  formData.append('address', params.address)
  formData.append('degree', params.degree)
  formData.append('acedemicrank', params.acedemicrank)
  formData.append('armyrank', params.armyrank)
  formData.append('profilepicture', params.profilepicture)
  const config = {
    method: 'patch',
    maxBodyLength: Infinity,
    url: `${BASE_URL}/users`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: formData
  }
  try {
    console.log('response')
    const response = await axios(config)
    response
  } catch (error) {
    console.log('error')
    console.log(error)
    throw error
  }
}

export const getAllUser = () => {
  return axios.get(`${BASE_URL}/users/all`).then(res => {
    return res.data
  })
}

export { updateUser }
