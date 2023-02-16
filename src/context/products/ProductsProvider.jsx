import { useEffect, useReducer } from 'react'
import { PRODUCT_REDUCER_TYPES, productsReducer, ProductContext } from '.'
import { productService } from '../../services'
import Cookies from 'js-cookie'

const PRODUCT_INITIAL_STATE = {
  products: []
}
export const COOKIE_PRODUCTS_KEY = 'products'

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, PRODUCT_INITIAL_STATE)

  const loadProducts = async () => {
    try {
      const cookieProducts = Cookies.get(COOKIE_PRODUCTS_KEY)
        ? JSON.parse(Cookies.get(COOKIE_PRODUCTS_KEY))
        : []

      if (cookieProducts.length > 0) {
        console.log('LOADED FROM COOKIES!', cookieProducts)
        return dispatch({
          type: PRODUCT_REDUCER_TYPES.loadProductsFromCookies,
          payload: cookieProducts
        })
      }

      const data = await productService.getAll()

      const response = Cookies.set(
        COOKIE_PRODUCTS_KEY,
        JSON.stringify({ products: data.results })
      )

      dispatch({
        type: PRODUCT_REDUCER_TYPES.loadProductsFromAPI,
        payload: data.results
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_REDUCER_TYPES.loadProductsFromCookies,
        payload: []
      })
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  )
}
