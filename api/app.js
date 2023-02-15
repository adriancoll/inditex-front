import { Server } from './Server'

import dotenv from 'dotenv'
dotenv.config()

// Creamos la instancia de express y rutas...
const instance = new Server()

// Server escuchando
instance.listen()
