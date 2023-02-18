import {
  customProviderRender,
  userEvent,
  wrapperWithRouter
} from '../../utils/test-utils'

import Header from './Header'
import { CartContext } from '../../context/cart'
import { Outlet, Route, Routes } from 'react-router-dom'

const logoAndTitleLabel = 'logo-icon'
const breadcrumbsLabel = 'breadcrumbs'

describe('<Header />', () => {
  test('Renders the header', () => {
    const { getByLabelText, getByText } = customProviderRender(
      CartContext,
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
    expect(getByLabelText('cart')).toHaveTextContent('1')

    getByLabelText(/logo-icon/i)
    getByText(/DeviApp/i)
    getByLabelText(/breadcrumbs/i)
  })

  test('Clicking Tittle or icon goes to /', async () => {
    const user = userEvent.setup()

    const productPageContent = <h1>Hello im in products</h1>

    const { getByLabelText, getByText } = customProviderRender(
      CartContext,
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
