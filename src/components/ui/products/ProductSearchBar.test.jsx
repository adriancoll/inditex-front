import { render, waitFor } from '../../../utils/test-utils'

import { ProductSearchBar } from './ProductSearchBar'

describe('<ProductSearchBar />', () => {
  it('should render', () => {
    const container = render(<ProductSearchBar query='' setQuery={() => {}} />)

    expect(container).toBeTruthy()
  })

  it('should be disabled', () => {
    const container = render(
      <ProductSearchBar query='' setQuery={() => {}} disabled />
    )
    const searchInput = container.getByPlaceholderText(/Buscar.../i)

    expect(searchInput).toBeDisabled()
  })

  it('should render query text', async () => {
    const expectedText = 'iphone'

    const container = render(<ProductSearchBar query={expectedText} />)

    const searchInput = container.getByPlaceholderText(/Buscar.../i)

    await waitFor(() => {
      expect(searchInput).toHaveValue(expectedText)
    })
  })
})
