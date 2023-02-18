// import { Header, Debugger } from '../ui'

import { getByLabelText, render } from '@testing-library/react'
import { wrapperWithRouter } from '../../utils/test-utils'
import { MainLayout } from './MainLayout'
import { CartContext } from '../../context/cart'
import { Route, Routes } from 'react-router-dom'

/**
 * A custom render to setup providers. Extends regular
 * render options with `providerProps` to allow injecting
 * different scenarios to test with.
 *
 * @see https://testing-library.com/docs/react-testing-library/setup#custom-render
 */
const customRender = (ui, { providerProps, ...renderOptions }) =>
  render(
    <CartContext.Provider {...providerProps}>{ui}</CartContext.Provider>,
    renderOptions
  )

describe('<MainLayout />', () => {
  const headerLabel = 'header'

  test('Renders its children', () => {
    const { getByText } = render(
      <MainLayout hasHeader={false}>
        <p>Hello world</p>
      </MainLayout>
    )

    expect(getByText(/hello world/i))
  })

  test('Renders <Header/>', () => {
    const { getByLabelText } = customRender(
      <Routes>
        <Route path='/' element={<MainLayout />} />
      </Routes>,
      {
        providerProps: { value: { count: 0 } },
        wrapper: ({ children }) =>
          wrapperWithRouter({ children, initialEntries: ['/'] })
      }
    )

    expect(getByLabelText(headerLabel)).toHaveTextContent(/home/i)
  })
})
