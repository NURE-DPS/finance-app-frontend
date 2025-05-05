import api from '../axiosInstance'

export const signUp = async (signUpData: {
  name: string
  email: string
  password: string
}) => {
  return await api.post('/auth/signup', signUpData)
}

export const logIn = async (logInData: { email: string; password: string }) => {
  return await api.post('/auth/signin', logInData)
}
