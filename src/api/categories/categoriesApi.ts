import api from "../axiosInstance"

export const fetchCategories = () => {
  return api.get('/categories')
}