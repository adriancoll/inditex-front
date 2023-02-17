import axios from 'axios'
import { httpProxy } from '../utils/httpProxy'

const instance = httpProxy('/api/products')

/**
 * Get all products from API
 * @returns Product[]
 */
export const getAll = async () => {
  const { data } = await instance.get()
  return data
}

/**
 * Get product detail from API by slug
 * @returns Product
 */
export const getProductDetail = async (productId) => {
  const { data } = await instance.get(`/${productId}`)
  return data
}
