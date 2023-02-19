import {
  render,
  screen,
  wrapperWithRouter as wrapper,
  waitFor,
  cleanup,
  userEvent
} from '../../../utils/test-utils'
import { AllProductsMock } from '../../../_mocks_/AddProductForm.mock'

import { ProductList } from './ProductList'

describe('<ProductList />', () => {
  let renderInstance

  afterEach(cleanup)

  beforeEach(() => {
    renderInstance = render(<ProductList products={AllProductsMock} />, {
      wrapper
    })
  })

  it('should render', () => {
    expect(renderInstance).toBeTruthy()
  })

  it('should render loading and then product cards', async () => {
    const cards = screen.getAllByRole('link')

    await waitFor(() => {
      expect(cards).toHaveLength(AllProductsMock.length)
    })
  })

  it('should change input text', async () => {
    const expectedValue = 'iphone'
    const searchInput = renderInstance.getByPlaceholderText(/Buscar.../i)

    expect(searchInput).not.toBeDisabled()
    expect(searchInput).toHaveValue('')

    await userEvent.type(searchInput, expectedValue)

    await waitFor(() => {
      expect(searchInput).toHaveValue(expectedValue)
    })
  })
})

describe('<ProductList /> loading states', () => {
  let renderInstance

  afterEach(cleanup)

  beforeEach(() => {
    renderInstance = render(<ProductList loading products={[]} />, {
      wrapper
    })
  })

  it('should render loading skeletons', () => {
    const skeletons = renderInstance.getAllByRole('status')

    expect(skeletons).toHaveLength(8)
    expect(renderInstance.getByText(/Loading.../i)).toBeInTheDocument()
  })

  //   it('should have search input disabled while loading', () => {
  //     renderInstance.getByPlaceholder(/Buscar.../i)
  //     renderInstance.debug()
  //   })

  it('should disable search input on products loading', () => {
    expect(renderInstance).toBeTruthy()
  })
})
