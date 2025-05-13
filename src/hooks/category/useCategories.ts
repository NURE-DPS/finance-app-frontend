import { useEffect, useState } from 'react'
import { Category } from '../../interfaces/Interfaces'
import { fetchCategories } from '../../api/categories/categoriesApi'

const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    const loadCategories = async () => {
      setLoading(true)
      try {
        const response = await fetchCategories()
        setCategories(response.data)
        setError(null)
      } catch (err) {
        console.error(err)
        setError('Failed to load categories')
      } finally {
        setLoading(false)
      }
    }

    loadCategories()
  }, [])

  return { categories, loading, error }
}

export default useCategories
