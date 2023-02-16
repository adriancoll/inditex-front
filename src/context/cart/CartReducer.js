export const CART_REDUCER_TYPES = {
  addXToCart: 'Cart | Add X product to cart',
  loadCartFromCookies: 'Cart | Load Cart From Cookies'
}

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_REDUCER_TYPES.addXToCart:
      return {
        ...state,
        count: Number(state.count) + action.payload
      }
    case CART_REDUCER_TYPES.loadCartFromCookies:
      return {
        ...state,
        count: action.payload
      }
    default:
      return state
  }
}
