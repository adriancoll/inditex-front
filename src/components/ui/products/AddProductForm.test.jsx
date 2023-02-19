import {
  cleanup,
  customProviderRender,
  screen,
  fireEvent,
  waitFor
} from '../../../utils/test-utils'
import {
  ProductMock,
  AddProductFormMock
} from '../../../_mocks_/AddProductForm.mock'

import { AddProductForm } from '.'
import { CartContext } from '../../../context/cart'


describe('<AddProductForm />', () => {
  let renderInstance

  afterEach(vi.clearAllMocks)
  afterEach(cleanup)

  beforeEach(
    () =>
      (renderInstance = customProviderRender(
        CartContext,
        <AddProductForm product={ProductMock} />,
        { providerProps: { value: { count: 0 } } }
      ))
  )

  const setup = () => {
    const colorInput = screen.getByLabelText(/selecciona un color/i)
    const storageInput = screen.getByLabelText(/selecciona una capacidad/i)
    const submitButton = screen.getByRole('button', {
      name: /Añadir al carrito/i
    })

    return { colorInput, storageInput, submitButton }
  }

  it('should render correctly', async () => {
    expect(renderInstance).toBeTruthy()
  })

  it('should render a selects', async () => {
    const { colorInput, storageInput } = setup()

    expect(colorInput).toBeInTheDocument()
    expect(storageInput).toBeInTheDocument()
  })

  it('should select values correctly', async () => {
    const { colorInput, storageInput } = setup()

    await fireEvent.change(colorInput, {
      target: { value: AddProductFormMock.colorCode }
    })
    await fireEvent.change(storageInput, {
      target: { value: AddProductFormMock.storageCode }
    })

    await waitFor(() => {
      expect(colorInput).toHaveValue(String(AddProductFormMock.colorCode))
      expect(storageInput).toHaveValue(String(AddProductFormMock.storageCode))
    })
  })

  it('should fail if a value is not in the options and have button disabled', async () => {
    const { colorInput, storageInput, submitButton } = setup()

    await fireEvent.change(colorInput, { target: { value: 20 } })
    await fireEvent.change(storageInput, { target: { value: 20 } })

    await waitFor(() => {
      expect(colorInput.value).not.toBeTruthy()
      expect(storageInput.value).not.toBeTruthy()
    })
  })

  it('should have button enabled if values are valid', async () => {
    const { colorInput, storageInput, submitButton } = setup()

    expect(submitButton).toBeDisabled()

    await fireEvent.change(colorInput, {
      target: { value: AddProductFormMock.colorCode }
    })
    await fireEvent.change(storageInput, {
      target: { value: AddProductFormMock.storageCode }
    })

    await waitFor(() => {
      expect(colorInput).toHaveValue(String(AddProductFormMock.colorCode))
      expect(storageInput).toHaveValue(String(AddProductFormMock.storageCode))
    })

    expect(submitButton).not.toBeDisabled()
  })

  it('should have button disabled if values are not valid', async () => {
    const { colorInput, storageInput, submitButton } = setup()

    expect(submitButton).toBeDisabled()

    await fireEvent.change(colorInput, { target: { value: 20 } })
    await fireEvent.change(storageInput, { target: { value: 20 } })

    await waitFor(() => {
      expect(colorInput.value).not.toBeTruthy()
      expect(storageInput.value).not.toBeTruthy()
    })

    expect(submitButton).toBeDisabled()
  })

  it('should have button disabled if one of its values is invalid', async () => {
    const { colorInput, storageInput, submitButton } = setup()

    expect(submitButton).toBeDisabled()
    await fireEvent.change(colorInput, {
      target: { value: AddProductFormMock.colorCode }
    })
    await fireEvent.change(storageInput, { target: { value: 20 } })

    await waitFor(() => {
      expect(colorInput).toHaveValue(String(AddProductFormMock.colorCode))
      expect(storageInput.value).not.toBeTruthy()
    })

    expect(submitButton).toBeDisabled()
  })

  //   it('should update header cart when submitting the form', async () => {
  //     const container = render(
  //       <CartContext.Provider value={{ count: 2 }}>
  //         <Header />
  //         <AddProductForm product={ProductMock} />
  //       </CartContext.Provider>,
  //       {
  //         wrapper: (props) =>
  //           wrapperWithRouter({ ...props, initialEntries: ['/'] })
  //       }
  //     )

  //     const submitButton = container.getByText('Añadir al carrito')

  //     await fireEvent.change(colorInput, {
  //       target: { value: AddProductFormMock.colorCode }
  //     })
  //     await fireEvent.change(storageInput, {
  //       target: { value: AddProductFormMock.storageCode }
  //     })

  //     await waitFor(() => {
  //       expect(colorInput).toHaveValue(String(AddProductFormMock.colorCode))
  //       expect(storageInput).toHaveValue(String(AddProductFormMock.storageCode))
  //       expect(submitButton).not.toBeDisabled()
  //     })
  //   })
})
