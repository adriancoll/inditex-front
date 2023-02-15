import { Router } from 'express'
import { cartController } from '../controllers'

export const cartRouter = Router()

cartRouter.post('/', cartController.addProductToCart)
