import { SignUpFormValues } from '../../interfaces/Interfaces'
import api from '../axiosInstance'

export const signUp = async (signUpData: SignUpFormValues) => {
  return await api.post('/auth/signup', signUpData)
}

export const logIn = async (logInData: { email: string; password: string }) => {
  return await api.post('/auth/signin', logInData)
}
