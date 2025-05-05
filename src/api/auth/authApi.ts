import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
})

export const signUp = async (signUpData: {
  name: string
  email: string
  password: string
}) => {
  return await api.post('/auth/signup', signUpData)
}
