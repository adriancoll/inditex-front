import { render } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { BreadCrumb } from './BreadCrumb'

/**
 * Función wrapper para establecer el router en una ruta específica pasada por el primer parametro
 * @example
 * ```jsx
 * const component = render(
      <Routes>
        <Route path='/' element={<SomeComponent />} />
      </Routes>,
      // Ruta donde empieza
      { wrapper: (prop) => wrapper(['/'], prop) }
    )
 * ```
 * @param {String[]} initialEntries Usado para inidicar al router en que ruta empieza el test
 * @param {Render props} renderProps
 * @returns JSX.Element
 */
function wrapper (initialEntries, { children }) {
  return <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
}

describe('<BreadCrumb />', () => {
  test('Render Home', () => {
    const component = render(
      <Routes>
        <Route path='/' element={<BreadCrumb />} />
      </Routes>,
      { wrapper: (prop) => wrapper(['/'], prop) }
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
      { wrapper: (prop) => wrapper(['/products'], prop) }
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
      { wrapper: (prop) => wrapper(['/products'], prop) }
    )

    // products its on the dom
    getByText(/products/i)

    // navigate to home
    await user.click(getByText(/home/i))

    // products its not in the DOM so throws an error
    expect(() => queryByText('products')).toThrow()
  })
})
