import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
})

api.interceptors.request.use(
  (config) => {
    const token = '123'
    if (token!) {
      config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6Im5uaDM3ZkJ3VjEyd2ZxZnYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3JnbXVpZXdvcWhmem13cXN5cmpwLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJjZGU1NjdmZC0yNGNlLTQ1NjUtYTcwYi1hYWVmNTU2MTdhNmIiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQ1ODM4ODI3LCJpYXQiOjE3NDU4MzUyMjcsImVtYWlsIjoibXlraGFpbG8ucGFybS5kZXZAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbCI6Im15a2hhaWxvLnBhcm0uZGV2QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaG9uZV92ZXJpZmllZCI6ZmFsc2UsInN1YiI6ImNkZTU2N2ZkLTI0Y2UtNDU2NS1hNzBiLWFhZWY1NTYxN2E2YiJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNzQ1ODM1MjI3fV0sInNlc3Npb25faWQiOiI2NDNhZDkzYy05NThjLTQ3NjQtOTUzMy1lOWI0YzE0NmZhODUiLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.-sfZDXecjZg7C9QVDRFKIuB7k5YIVaYmk14NJD6VGKw`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export const createWallet = (walletData: {
  name: string
  currency: string
  balance: string
}) => {
  return api.post('/wallets', walletData)
}

export const fetchWallets = () => {
  return api.get('/wallets')
}

export default api

function getToken() {
  throw new Error('Function not implemented.')
}
