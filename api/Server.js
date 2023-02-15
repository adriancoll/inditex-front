import express from 'express'
import cors from 'cors'

import productRouter from './routes/products.routes'

console.log('HOLAAAAAAAA');

export class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT


    console.log(process.env.PORT);
    this.productPath = '/api/product'
    this.cartPath = '/api/cart'

    //conectar base de datos
    // this.conectarDB()

    //Middlewares
    this.middlewares()

    this.routes()
  }

  // async conectarDB() {
  //   await dbConnection()
  // }

  middlewares() {
    // Política de CORS
    this.app.use(cors())

    // Lectura y parseo del body a JSON
    this.app.use(express.json())
  }

  routes() {
    this.app.use(this.productPath, productRouter)
    // this.app.use(this.cartPath, require('../routes/cart.routes'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`)
    })
  }
}
