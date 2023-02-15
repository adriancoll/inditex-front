import { Router } from 'express'
import { addProductToCart } from '../controllers/cart.controller.js'

export const cartRouter = Router()

cartRouter.post('/', [],addProductToCart)
