import { render } from '@testing-library/react'
import { Debugger } from './Debugger'
import { CartProvider } from '../../context/cart'
import { ProductProvider } from '../../context/products'

function wrapper ({ children }) {
  return (
    <ProductProvider>
      <CartProvider>{children}</CartProvider>
    </ProductProvider>
  )
}

test('it renders', () => {
  const component = render(<Debugger />, { wrapper })

  const data = {
    count: 0,
    products: []
  }

  component.getByText(JSON.stringify(data))
})
