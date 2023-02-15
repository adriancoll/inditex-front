import { response, request } from 'express'

export const addProductToCart = (req = request, res = response) => {
  const { body } = req
  // const {} = body

  return res.json({ text: 'Update cart', body })
}
