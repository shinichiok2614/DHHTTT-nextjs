import axios from 'axios'
import { BASE_URL } from '..'

export const getPersonInfo = () => {
  return axios.get(`${BASE_URL}/person`).then(res => {
    return res.data
  })
}
export const getAllPerson = () => {
  return axios.get(`${BASE_URL}/person/all`).then(res => {
    return res.data
  })
}
export const updatePersonAdmin = async (idPerson: number, idUser: number) => {
  console.log('updatePersonAdmin')
  const formData = new FormData()
  formData.append('idUser', idUser.toString())
  const config = {
    method: 'patch',
    maxBodyLength: Infinity,
    url: `${BASE_URL}/person/admin/${idPerson}`,
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
