export const PRODUCT_REDUCER_TYPES = {
  loadProductsFromCookies: 'Products - Load products from cookies | storage',
  loadProductsFromAPI: 'Products - Load products from API',
  startLoading: 'Products - Start loading',
  stopLoading: 'Products - Stop loading'
}

export const productsReducer = (state, action) => {
  switch (action.type) {
    case PRODUCT_REDUCER_TYPES.loadProductsFromCookies:
      return {
        ...state,
        products: [...action.payload]
      }
    case PRODUCT_REDUCER_TYPES.loadProductsFromAPI:
      return {
        ...state,
        products: [...action.payload]
      }
    case PRODUCT_REDUCER_TYPES.startLoading:
      return {
        ...state,
        loading: true
      }
    case PRODUCT_REDUCER_TYPES.stopLoading:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
