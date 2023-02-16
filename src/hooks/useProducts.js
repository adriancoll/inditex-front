import { useContext } from 'react'
import { ProductContext } from '../context/products'

export const useProducts = () => {
  const context = useContext(ProductContext)

  if (context === undefined) {
    throw new Error('Comprueba el proveedor de los productos!')
  }



  return { ...context }
}
