import axios from 'axios'

const instance = axios.create({ baseURL: 'http://localhost:3001/api/cart' })

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
