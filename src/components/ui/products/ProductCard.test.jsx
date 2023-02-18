import { render, screen } from '@testing-library/react'
import { ProductCard } from './ProductCard'
import { wrapperWithRouter } from '../../../utils/test-utils'

describe('<ProductCard />', () => {
  let renderInstance
  const mockedProduct = {
    brand: 'Honor',
    model: 'Magic Lite 5G',
    slug: 'honor-magic-lite-5g',
    price: 165,
    image:
      'https://specifications-pro.com/wp-content/uploads/2023/01/Honor-Magic-5-Lite-5G-600x600.jpg',
    colors: ['verde', 'negro', 'plata'],
    storage: [128],
    specification: {
      weight: 196,
      ram: '6-8',
      cpu: 'Dimensity 700',
      dimensions: '167.5 x 76.9 x 8.3 mm (6.59 x 3.03 x 0.33 in)',
      battery: 6000,
      resolution: '720 x 1600',
      os: 'Android 13',
      cameras: 2
    }
  }

  beforeEach(
    () =>
      (renderInstance = render(<ProductCard product={mockedProduct} />, {
        wrapper: (props) =>
          wrapperWithRouter({ ...props, initialEntries: ['/'] })
      }))
  )

  test('it should render', () => {
    expect(renderInstance).toBeTruthy()
  })

  test('Renders the link with the correct slug', () => {
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      `/products/${mockedProduct.slug}`
    )
  })

  test('renders all necessary properties', () => {
    renderInstance.debug()

    const imageComponent = screen.getByRole('img')

    expect(imageComponent).toHaveAttribute('src', mockedProduct.image)
    expect(imageComponent).toHaveAttribute(
      'alt',
      `${mockedProduct.brand} ${mockedProduct.model}`
    )

    expect(screen.getByLabelText('product-brand-and-model')).toHaveTextContent(
      `${mockedProduct.brand} | ${mockedProduct.model}`
    )

    expect(screen.getByText(`${mockedProduct.price} €`)).toBeInTheDocument()

    expect(
      screen.getByAltText(`${mockedProduct.brand} ${mockedProduct.model}`)
    ).toBeInTheDocument()
  })
})
