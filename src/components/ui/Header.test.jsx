import { getByLabelText, render } from '@testing-library/react'
import { userEvent, wrapperWithRouter } from '../../utils/test-utils'

import Header from './Header'
import { CartContext } from '../../context/cart'
import { Outlet, Route, Routes } from 'react-router-dom'

const logoAndTitleLabel = 'logo-icon'
const breadcrumbsLabel = 'breadcrumbs'

/**
 * A custom render to setup providers. Extends regular
 * render options with `providerProps` to allow injecting
 * different scenarios to test with.
 *
 * @see https://testing-library.com/docs/react-testing-library/setup#custom-render
 */
const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <CartContext.Provider {...providerProps}>{ui}</CartContext.Provider>,
    renderOptions
  )
}

describe('<Header />', () => {
  test('Renders the header', () => {
    const { getByLabelText, getByText } = customRender(
      <Routes>
        <Route path='/' element={<Header />} />
      </Routes>,
      {
        providerProps: {
          value: { count: 1 }
        },
        wrapper: wrapperWithRouter
      }
    )

    // Cart
    expect(getByLabelText(/cart/i)).toHaveTextContent(/1/i)

    getByLabelText(/logo-icon/i)
    getByText(/DeviApp/i)
    getByLabelText(/breadcrumbs/i)
  })

  test('Clicking Tittle or icon goes to /', async () => {
    const user = userEvent.setup()

    const productPageContent = <h1>Hello im in products</h1>

    const { getByLabelText, getByText } = customRender(
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <Outlet />
            </>
          }
        >
          <Route path='/products' element={productPageContent} />
        </Route>
      </Routes>,
      {
        providerProps: {
          value: { count: 0 }
        },
        wrapper: ({ children }) =>
          wrapperWithRouter({ children, initialEntries: ['/products'] })
      }
    )

    // We are in /products
    getByText(/hello im in products/i)

    // click the title
    await user.click(getByLabelText(logoAndTitleLabel))

    // check the breadcrumbs that dont have prodcuts
    expect(getByLabelText(breadcrumbsLabel)).not.toHaveTextContent('products')
    // check the content that dont have prodcuts
    expect(() => getByText(/hello im in products/i)).toThrow()
  })
})
