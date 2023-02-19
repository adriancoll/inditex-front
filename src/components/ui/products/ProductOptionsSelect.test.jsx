import { render, userEvent, waitFor, screen } from '../../../utils/test-utils'
import { ProductOptionsSelect } from '../../../components/ui/products/ProductOptionsSelect'
import { vi } from 'vitest'

describe('<ProductSelectOptions />', () => {
  let renderInstance

  const mockOptions = ['red', 'white', 'blue']

  beforeEach(
    () =>
      (renderInstance = render(<ProductOptionsSelect options={mockOptions} />))
  )

  test('It renders', () => expect(renderInstance).toBeTruthy)

  test('It preselects the option if theres just one', async () => {
    const user = userEvent.setup()

    const onChangeMock = vi.fn()

    render(<ProductOptionsSelect onChange={onChangeMock} options={['black']} />)
  })
})
