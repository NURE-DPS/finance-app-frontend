import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api/auth',
})

export const signUp = async (signUpData: {
  name: string
  email: string
  password: string
}) => {
  return await api.post('/signup', signUpData)
}

export const logIn = async (logInData: { email: string; password: string }) => {
  return await api.post('/signin', logInData)
}
