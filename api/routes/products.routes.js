import { Router } from 'express'
import { productController } from '../controllers'

export const productsRouter = Router()

productsRouter.get('/:id', productController.getProductDetail)

productsRouter.get('/', productController.getProducts)
