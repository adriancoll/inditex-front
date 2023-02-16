import { useReducer } from 'react'
import { CartContext } from './CartContext'
import { cartReducer } from './CartReducer'

export const CART_INITIAL_STATE = {
  count: 0
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)

  return (
    <CartContext.Provider value={{ state }}>{children}</CartContext.Provider>
  )
}
