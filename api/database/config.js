import mongoose from 'mongoose'

export const dbConnection = async () => {
  try {
    console.log(process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI)

    console.log('Conexión de base de datos establecida')
  } catch (error) {
    console.error(error.message)
    return
  }
}
