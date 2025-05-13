import { useEffect, useState } from 'react'
import { Category } from '../../interfaces/Interfaces'
import { fetchCategories } from '../../api/categories/categoriesApi'


const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const loadCategories = async () => {
      const response = await fetchCategories()
    setCategories(response.data)
    }

    loadCategories()
  }, [])

  return { categories }
}

export default useCategories