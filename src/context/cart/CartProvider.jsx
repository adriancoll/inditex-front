import { useEffect, useReducer } from 'react'
import { CartContext } from './CartContext'
import { CART_REDUCER_TYPES, cartReducer } from './CartReducer'
import Cookies from 'js-cookie'
import { cartService } from '../../services'

export const CART_INITIAL_STATE = {
  count: 0
}

export const CART_COOKIE_KEY = 'cartCount'

/**
 * For making the cookie just one hour
 * @see https://github.com/js-cookie/js-cookie/wiki/Frequently-Asked-Questions#expire-cookies-in-less-than-a-day
 */
const inOneHour = 2 / 48

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)

  const loadCartData = () => {
    const cartCookies = Cookies.get(CART_COOKIE_KEY)
      ? JSON.parse(Cookies.get(CART_COOKIE_KEY)).count
      : 0

    dispatch({
      type: CART_REDUCER_TYPES.loadCartFromCookies,
      payload: cartCookies
    })
  }

  const addToCart = async (id, colorCode, storageCode, callback) => {
    try {
      const data = await cartService.updateCart({
        id,
        colorCode,
        storageCode
      })

      dispatch({
        type: CART_REDUCER_TYPES.addXToCart,
        payload: data.results.count
      })

      callback(true)
    } catch (err) {
      callback(false)
    }
  }

  /**
   * Effect to load the data from cookies
   */
  useEffect(() => {
    loadCartData()
  }, [])

  useEffect(() => {
    if (state.count === 0) return

    Cookies.set(CART_COOKIE_KEY, JSON.stringify(state), { expires: inOneHour })
  }, [state])

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}
