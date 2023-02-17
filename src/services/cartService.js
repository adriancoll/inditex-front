import axios from 'axios'

const instance = axios.create({ baseURL: `${import.meta.env.VITE_API_URL}/api/cart` })

/**
 * Checks if the product can be added to the API and returns the count of product
 * @param {mixin} Product
 * @returns
 */
export const updateCart = async ({ id, colorCode, storageCode }) => {
  const { data } = await instance.post('/', { id, colorCode, storageCode })
  console.log({ data })
  return data
}
