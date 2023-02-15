import { Router } from 'express'
import {
  getProductDetail,
  getProducts,
} from '../controllers/products.controller.js'

export const productsRouter = Router()

import { crudValidator } from '../middlewares/crud-validator.middleware.js'

productsRouter.get('/:id', [crudValidator], getProductDetail)

productsRouter.get('/', [crudValidator], getProducts)
