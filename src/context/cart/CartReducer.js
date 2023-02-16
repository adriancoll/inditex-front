export const CART_REDUCER_TYPES = {
  addXToCart: 'Cart | Add X product to cart'
}

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_REDUCER_TYPES.addXToCart:
      return {
        ...state,
        count: state.count + action.payload
      }
    default:
      return state
  }
}
