import { render } from '@testing-library/react'
import { Route, Routes } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { BreadCrumb } from './BreadCrumb'
import { wrapperWithRouter } from '../../utils/test-utils'

describe('<BreadCrumb />', () => {
  test('Render Home', () => {
    const component = render(
      <Routes>
        <Route path='/' element={<BreadCrumb />} />
      </Routes>,
      {
        wrapper: ({ children }) =>
          wrapperWithRouter({ children, initialEntries: ['/'] })
      }
    )

    component.getByText('Home')
  })

  test('Render Home and Products', () => {
    const component = render(
      <Routes>
        <Route path='/' element={<BreadCrumb />}>
          <Route path='/products' element={<BreadCrumb />} />
        </Route>
      </Routes>,
      {
        wrapper: ({ children }) =>
          wrapperWithRouter({ children, initialEntries: ['/products'] })
      }
    )

    component.getByText('Home')
    component.getByText('products')
  })

  test('Navigates to Home and every link disappears', async () => {
    const user = userEvent.setup()

    const { getByText } = render(
      <Routes>
        <Route path='/' element={<BreadCrumb />}>
          <Route path='/products' />
        </Route>
      </Routes>,
      {
        wrapper: (prop) =>
          wrapperWithRouter({ ...prop, initialEntries: ['/products'] })
      }
    )

    // products its on the dom
    getByText(/products/i)

    // navigate to home
    await user.click(getByText(/home/i))

    // products its not in the DOM so throws an error
    expect(() => queryByText('products')).toThrow()
  })
})
