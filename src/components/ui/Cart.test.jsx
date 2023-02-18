import { CartContext } from '../../context/cart'
import { customProviderRender, wrapperWithRouter } from '../../utils/test-utils'
import { Cart } from './Cart'

describe('<Cart />', () => {
  const cartIconLabel = 'cart-icon'
  let cartCount = 0

  test('renders cart icon', () => {
    cartCount = 0

    const { getByLabelText } = customProviderRender(CartContext, <Cart />, {
      providerProps: {
        value: { count: cartCount }
      },
      wrapper: wrapperWithRouter
    })

    // icon is rendered
    expect(getByLabelText(cartIconLabel)).toBeInTheDocument()
  })

  test('Not renders number if is 0', () => {
    cartCount = 0

    const { getByText } = customProviderRender(CartContext, <Cart />, {
      providerProps: {
        value: { count: cartCount }
      }
    })

    expect(() => getByText(cartCount)).toThrow()
  })

  test('Renders the number if cart is more than 0', () => {
    cartCount = 5

    const { getByText } = customProviderRender(CartContext, <Cart />, {
      providerProps: {
        value: { count: cartCount }
      }
    })

    expect(getByText(cartCount))
  })
})
