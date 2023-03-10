import { useProducts, useCart } from '.'

export const useDebugger = () => {
  const { products } = useProducts()
  const { count } = useCart()

  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      'Debes estar en modo desarrollo para poder utilizar el hook useDebugger!'
    )
  }

  return { products, count }
}
