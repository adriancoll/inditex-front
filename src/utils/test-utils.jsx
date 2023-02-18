/* eslint-disable import/export */
import { cleanup, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})

const customRender = (ui, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options
  })

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
// override render export
export { customRender as render }

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
export const wrapperWithRouter = ({ children, initialEntries }) => {
  if (!initialEntries)
    return <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>

  return <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
}