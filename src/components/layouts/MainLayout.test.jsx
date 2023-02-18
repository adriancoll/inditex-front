// import { Header, Debugger } from '../ui'

import { render } from '@testing-library/react'
import { customProviderRender, wrapperWithRouter } from '../../utils/test-utils'
import { MainLayout } from './MainLayout'
import { CartContext } from '../../context/cart'
import { Route, Routes } from 'react-router-dom'

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
    const { getByLabelText } = customProviderRender(
      CartContext,
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
