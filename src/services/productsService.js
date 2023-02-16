import axios from 'axios'

const instance = axios.create({ baseURL: 'http://localhost:3001/api/products' })

/**
 * Get all products from API
 * @returns Product[]
 */
export const getAll = async () => {
  const { data } = await instance.get()
  return data
}

/**
 * Get product detail from API
 * @returns Product
 */
export const getProductDetail = async (productId) => {
  const { data } = await instance.get(`/${productId}`)
  return data
}
